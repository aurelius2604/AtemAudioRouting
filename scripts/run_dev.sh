#!/usr/bin/env bash
# run_dev.sh — запуск в режиме разработки (без сборки .app)
set -e
cd "$(dirname "$0")/.."

echo "==> Активируем venv..."
source venv/bin/activate

echo "==> Запуск Streamlit GUI..."
echo "    Открой браузер: http://localhost:8501"
streamlit run atem_gui.py --server.headless false
