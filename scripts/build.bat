@echo off
:: build.bat — собирает ATEM Audio Routing.exe для Windows
setlocal enabledelayedexpansion

cd /d "%~dp0\.."

echo =^=^> Активируем venv...
call venv\Scripts\activate.bat
if errorlevel 1 (
    echo ОШИБКА: не найден venv. Создайте его: python -m venv venv
    exit /b 1
)

echo =^=^> PyInstaller сборка...
pyinstaller "ATEM Audio Routing.spec" --noconfirm
if errorlevel 1 (
    echo ОШИБКА: PyInstaller завершился с ошибкой
    exit /b 1
)

set APP_DIR=dist\ATEM Audio Routing

:: Ищем _internal (PyInstaller 6+) или используем корень папки
if exist "%APP_DIR%\_internal" (
    set TARGET=%APP_DIR%\_internal
) else (
    set TARGET=%APP_DIR%
)

echo =^=^> Копируем node_modules в %TARGET%\node_modules...
xcopy /E /I /Y /Q node_modules "%TARGET%\node_modules\"
if errorlevel 1 (
    echo ПРЕДУПРЕЖДЕНИЕ: не удалось скопировать node_modules
)

echo =^=^> Готово: %APP_DIR%\
dir /s /b "%APP_DIR%\ATEM Audio Routing.exe" 2>nul
endlocal
