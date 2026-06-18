# ATEM Audio Routing

Streamlit GUI для управления Fairlight аудио роутингом на ATEM микшерах (Production Studio 4K, Constellation и др.).

## Что умеет

- Матрица роутинга: N AUX выходов × 8 стерео-пар (1/2 … 15/16)
- Подтягивает названия AUX выходов и источников прямо из ATEM (кастомные имена если заданы в микшере)
- Сохраняет последний IP и восстанавливает при запуске
- Поиск ATEM в сети: mDNS (`_blackmagic._tcp.local.`) + UDP-скан /24
- Экспорт/импорт маршрутов через XML-конфигурацию ATEM

## Архитектура

```
atem_gui.py  ──(UDP 9910)──► pyatem ──► ATEM
     │                    читает ARSP/AROP
     │
     └──(TCP 9915)──► aroc_server.js ──(atem-connection)──► ATEM
                      отправляет AROC команды
```

- **pyatem** (Python) — подключается к ATEM и читает состояние через UDP 9910
- **aroc_server.js** (Node.js) — отдельный процесс, слушает TCP 9915, принимает JSON-команды и отправляет AROC через `atem-connection` npm

Два процесса нужны потому что `pyatem` не поддерживает отправку Fairlight AROC в полном виде (требует точных метаданных), а `atem-connection` отправляет правильно.

## Установка (dev)

```bash
python3 -m venv venv
venv/bin/python3 -m pip install -r requirements.txt
npm install
```

## Запуск (dev)

```bash
bash scripts/run_dev.sh
```

Откроется http://localhost:8501. Node backend запускается автоматически при нажатии «Подключиться».

## Сборка macOS .app

```bash
bash scripts/build.sh
```

Результат: `dist/ATEM Audio Routing.app`. Двойной клик запускает приложение и открывает браузер.

Требования для сборки:
- `venv/` с `pyinstaller` и зависимостями
- `node_modules/` (`npm install`)
- `tools/node_runtime/` — бандлированный Node.js runtime (уже в репо)

## Структура

```
atem_gui.py          — Streamlit GUI, вся логика Python
launcher.py          — точка входа для .app, запускает Streamlit
tools/
  aroc_server.js     — Node backend (AROC сервер)
  aroc_server.bundle.js  — бандл для fallback (без node_modules)
  node_runtime/      — Node.js binary для standalone .app
scripts/
  run_dev.sh         — запуск в dev-режиме
  build.sh           — сборка .app через PyInstaller
ATEM Audio Routing.spec  — конфиг PyInstaller
```

## Конфиги

- `~/Documents/ATEM Audio Routing/config.json` — сохранённый IP
- `~/Library/Logs/ATEM Audio Routing/` — логи (node_backend.log, app.log)
