# -*- mode: python ; coding: utf-8 -*-
import sys
import os
from PyInstaller.utils.hooks import collect_all

datas = [
    ('atem_gui.py', '.'),
    ('tools/aroc_server.js', 'tools'),
    ('tools/aroc_server.bundle.js', 'tools'),
    # node_modules копируется post-build скриптом (см. build.sh / build.bat),
    # т.к. вложенные node_modules ломают PyInstaller BUNDLE шаг.
]

# Включаем Node runtime для текущей платформы
if sys.platform == 'darwin' and os.path.exists('tools/node_runtime'):
    datas.append(('tools/node_runtime', 'node_runtime'))
elif sys.platform == 'win32' and os.path.exists('tools/node_runtime_win'):
    datas.append(('tools/node_runtime_win', 'node_runtime'))

binaries = []
hiddenimports = [
    'streamlit',
    'streamlit.web',
    'streamlit.web.bootstrap',
    'zeroconf',
    'zeroconf._utils',
    'zeroconf._utils.ipaddress',
    'zeroconf._utils.net',
    'ifaddr',
    'concurrent.futures',
    # atem_core: imported by atem_gui.py at runtime (atem_gui.py is bundled as a
    # data file, so PyInstaller does not follow its imports — list them here).
    'atem_core',
    'atem_core.constants',
    'atem_core.encoding',
    'atem_core.config',
    'atem_core.routing',
    'atem_core.xml_mapping',
    'atem_core.commands',
]

tmp_ret = collect_all('streamlit')
datas += tmp_ret[0]; binaries += tmp_ret[1]; hiddenimports += tmp_ret[2]

tmp_ret = collect_all('pyatem')
datas += tmp_ret[0]; binaries += tmp_ret[1]; hiddenimports += tmp_ret[2]


a = Analysis(
    ['launcher.py'],
    pathex=['.'],
    binaries=binaries,
    datas=datas,
    hiddenimports=hiddenimports,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='ATEM Audio Routing',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)
coll = COLLECT(
    exe,
    a.binaries,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='ATEM Audio Routing',
)

# macOS: создаём .app bundle
if sys.platform == 'darwin':
    app = BUNDLE(
        coll,
        name='ATEM Audio Routing.app',
        icon=None,
        bundle_identifier='com.atem.audiorouting',
    )
