#!/usr/bin/env bash
# build.sh — собирает ATEM Audio Routing.app для macOS
set -e
cd "$(dirname "$0")/.."

echo "==> PyInstaller сборка..."
# Вызываем PyInstaller через python модуль, а не через `source activate` +
# `pyinstaller` на PATH: активация ломается, если venv был создан по другому
# пути (relocation), а `python -m` использует относительный путь к интерпретатору.
PY="venv/bin/python3"
[ -x "$PY" ] || PY="venv/bin/python"
"$PY" -m PyInstaller "ATEM Audio Routing.spec" --noconfirm

APP="dist/ATEM Audio Routing.app"
FRAMEWORKS="$APP/Contents/Frameworks"

echo "==> Копируем node_modules в .app..."
# rsync корректно обрабатывает вложенные node_modules и symlinks
rsync -a --delete node_modules/ "$FRAMEWORKS/node_modules/"

echo "==> Готово: $APP"
echo "    Размер: $(du -sh "$APP" | cut -f1)"
