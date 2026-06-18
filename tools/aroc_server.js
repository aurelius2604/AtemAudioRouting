/* eslint-disable no-console */
const net = require('net')
const { Atem, Commands } = require('atem-connection')

function usage() {
  console.log('Usage: node tools/aroc_server.js <ATEM_IP> [--port 9915]')
  process.exit(1)
}

const args = process.argv.slice(2)
if (args.length < 1) usage()

const ip = args[0]
let port = 9915
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--port') {
    port = Number(args[i + 1] || 9915)
  }
}

const atem = new Atem()
let connected = false
let connecting = false

atem.on('connected', () => {
  connected = true
  console.log('ATEM connected')
})
atem.on('disconnected', () => {
  connected = false
  console.warn('ATEM disconnected')
  setTimeout(connectAtem, 2000)
})
atem.on('error', (err) => {
  console.error('ATEM error:', err)
})

async function connectAtem() {
  if (connected || connecting) return
  connecting = true
  try {
    await atem.connect(ip)
    connected = true
  } catch (e) {
    console.error('Connect failed:', e)
  } finally {
    connecting = false
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function waitRoutingReady(timeoutMs = 1500) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    const outputs = atem.state?.fairlight?.audioRouting?.outputs || {}
    if (Object.keys(outputs).length) return true
    await sleep(100)
  }
  // routing state may not be populated on some models — proceed anyway
  return true
}

async function waitApplied(outputId, sourceId, timeoutMs = 800) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    const routing = atem.state?.fairlight?.audioRouting?.outputs?.[outputId]
    if (routing && routing.sourceId === sourceId) return true
    await sleep(80)
  }
  return false
}

async function handleMessage(msg) {
  if (msg.cmd === 'status') {
    const outputs = atem.state?.fairlight?.audioRouting?.outputs || {}
    const sources = atem.state?.fairlight?.audioRouting?.sources || {}
    return {
      ok: true,
      connected,
      outputs: Object.keys(outputs).length,
      sources: Object.keys(sources).length
    }
  }

  if (msg.cmd === 'set') {
    const outputId = Number(msg.outputId)
    const sourceId = Number(msg.sourceId)
    if (!Number.isFinite(outputId) || !Number.isFinite(sourceId)) {
      return { ok: false, error: 'invalid outputId/sourceId' }
    }

    await connectAtem()
    if (!connected) return { ok: false, error: 'not connected' }

    await waitRoutingReady()

    await atem.setFairlightAudioRoutingOutputProperties(outputId, { sourceId })

    const applied = await waitApplied(outputId, sourceId)
    return { ok: true, applied }
  }

  return { ok: false, error: 'unknown command' }
}

const server = net.createServer((socket) => {
  let buffer = ''
  socket.setEncoding('utf8')

  socket.on('data', async (data) => {
    buffer += data
    while (buffer.includes('\n')) {
      const idx = buffer.indexOf('\n')
      const line = buffer.slice(0, idx).trim()
      buffer = buffer.slice(idx + 1)
      if (!line) continue

      let msg
      try {
        msg = JSON.parse(line)
      } catch (e) {
        socket.write(JSON.stringify({ ok: false, error: 'bad json' }) + '\n')
        continue
      }

      try {
        const res = await handleMessage(msg)
        socket.write(JSON.stringify(res) + '\n')
      } catch (e) {
        socket.write(JSON.stringify({ ok: false, error: String(e) }) + '\n')
      }
    }
  })
})

server.listen(port, () => {
  console.log(`AROC server listening on ${port}`)
  connectAtem().catch(() => {})
})
