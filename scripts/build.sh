#!/usr/bin/env bash
# build.sh — собирает ATEM Audio Routing.app для macOS
set -e
cd "$(dirname "$0")/.."

echo "==> Активируем venv..."
source venv/bin/activate

echo "==> PyInstaller сборка..."
pyinstaller "ATEM Audio Routing.spec" --noconfirm

APP="dist/ATEM Audio Routing.app"
FRAMEWORKS="$APP/Contents/Frameworks"

echo "==> Копируем node_modules в .app..."
# rsync корректно обрабатывает вложенные node_modules и symlinks
rsync -a --delete node_modules/ "$FRAMEWORKS/node_modules/"

echo "==> Готово: $APP"
echo "    Размер: $(du -sh "$APP" | cut -f1)"
