/* eslint-disable no-console */
const { Atem } = require('atem-connection')

function usage() {
  console.log('Usage: node tools/test_aroc.js <ATEM_IP> <outputId> <sourceId>')
  console.log('   or: node tools/test_aroc.js <ATEM_IP> --list')
  console.log('   or: node tools/test_aroc.js <ATEM_IP> --list --wait 10')
  console.log('   or: node tools/test_aroc.js <ATEM_IP> <outputId> <sourceId> --waitstate 8')
  console.log('Example outputId for AUX1 3/4: 131137537')
  console.log('Example sourceId Program 1/2: 150798336')
  process.exit(1)
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function main() {
  const [, , ip, outputIdStr, sourceIdStr, ...rest] = process.argv
  if (!ip || !outputIdStr) usage()
  const listOnly = outputIdStr === '--list'
  const waitIdx = rest.indexOf('--wait')
  const waitSeconds = waitIdx >= 0 ? Number(rest[waitIdx + 1] || 10) : 5
  const waitStateIdx = rest.indexOf('--waitstate')
  const waitStateSeconds = waitStateIdx >= 0 ? Number(rest[waitStateIdx + 1] || 8) : 5

  const outputId = listOnly ? null : Number(outputIdStr)
  const sourceId = listOnly ? null : Number(sourceIdStr)
  if (!listOnly && (!Number.isFinite(outputId) || !Number.isFinite(sourceId))) usage()

  const atem = new Atem()
  atem.on('error', (err) => {
    console.error('ATEM error:', err)
  })
  atem.on('disconnected', () => {
    console.warn('ATEM disconnected')
  })
  atem.on('connected', () => {
    console.log('ATEM connected event')
  })

  console.log(`Connecting to ATEM at ${ip}...`)
  await atem.connect(ip)
  console.log('Connected')

  const waitRoutingState = async (seconds) => {
    const waitMs = Math.max(1, seconds) * 1000
    const start = Date.now()
    while (Date.now() - start < waitMs) {
      const outputs = atem.state?.fairlight?.audioRouting?.outputs || {}
      if (Object.keys(outputs).length) return true
      await sleep(200)
    }
    return false
  }

  if (listOnly) {
    await waitRoutingState(waitSeconds)
    const outputs = atem.state?.fairlight?.audioRouting?.outputs || {}
    const sources = atem.state?.fairlight?.audioRouting?.sources || {}
    console.log('Outputs:', Object.keys(outputs).slice(0, 10))
    console.log('Sources:', Object.keys(sources).slice(0, 10))
    console.log('Total outputs:', Object.keys(outputs).length)
    console.log('Total sources:', Object.keys(sources).length)
  } else {
    await waitRoutingState(waitStateSeconds)
    const { Commands } = require('atem-connection')
    const cmd = new Commands.AudioRoutingOutputCommand(outputId)
    cmd.updateProps({ sourceId })
    console.log(`Sending AROC: outputId=${outputId} sourceId=${sourceId}`)
    await atem.sendCommands([cmd])
  }

  console.log('Waiting 2s for state update...')
  await sleep(2000)

  const state = atem.state
  if (!listOnly) {
    const routing = state?.fairlight?.audioRouting?.outputs?.[outputId]
    if (routing) {
      console.log('Current routing:', routing)
    } else {
      console.log('No routing state found for outputId')
    }
  }

  await atem.disconnect()
  process.exit(0)
}

main().catch((e) => {
  console.error('Fatal:', e)
  process.exit(1)
})
