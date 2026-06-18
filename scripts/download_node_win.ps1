# download_node_win.ps1 — скачивает Node.js runtime для Windows (x64)
# Запускать из корня проекта: .\scripts\download_node_win.ps1

$NODE_VERSION = "20.11.1"
$ARCH = "x64"
$URL = "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-win-$ARCH.zip"
$ZIP = "$env:TEMP\node-win.zip"
$DEST = "tools\node_runtime_win"

Write-Host "==> Скачиваем Node.js $NODE_VERSION ($ARCH) для Windows..."
Invoke-WebRequest -Uri $URL -OutFile $ZIP -UseBasicParsing

Write-Host "==> Распаковываем в $DEST..."
if (Test-Path $DEST) { Remove-Item $DEST -Recurse -Force }
Expand-Archive -Path $ZIP -DestinationPath $env:TEMP\node_tmp

$extracted = Get-ChildItem "$env:TEMP\node_tmp" | Select-Object -First 1
Move-Item $extracted.FullName $DEST

Remove-Item $ZIP -Force
Remove-Item "$env:TEMP\node_tmp" -Recurse -Force

Write-Host "==> Готово: $DEST\node.exe"
& "$DEST\node.exe" --version
