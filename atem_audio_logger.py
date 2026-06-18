"""
Вспомогательный скрипт для отладки: логирует все поля, связанные с аудио-роутингом.
Запустите его, чтобы увидеть точные имена полей, которые использует ваш ATEM.
"""
from __future__ import annotations

import sys
from rich.console import Console
from rich.table import Table
from pyatem.protocol import AtemProtocol


def _get_attr(obj, *names):
    """Пытается получить атрибут по нескольким возможным именам"""
    for n in names:
        if hasattr(obj, n):
            return getattr(obj, n)
    return None


def _format_hex(raw: bytes) -> str:
    return raw.hex()


def main(ip: str, log_all: bool = False, only_ar: bool = False):
    console = Console()
    audio_fields = []

    sw = AtemProtocol(ip)

    def on_any_change(fieldname, field):
        fn = str(fieldname).lower()

        if log_all:
            if only_ar and str(fieldname) not in {"ARSP", "AROP"}:
                return
            console.print(f"[blue]Field:[/blue] {fieldname} ({type(field).__name__})")
            if isinstance(field, (bytes, bytearray)):
                if str(fieldname) in {"ARSP", "AROP"}:
                    console.print(f"  Raw({len(field)}): {_format_hex(field)}")
                else:
                    hex_preview = field[:16].hex()
                    console.print(f"  Raw({len(field)}): {hex_preview}")
            return

        # Ловим все поля, связанные с аудио
        if "audio" in fn or "aud" in fn or "rout" in fn or "embed" in fn or "aux" in fn:
            # Собираем информацию о поле
            info = {
                "fieldname": str(fieldname),
                "type": type(field).__name__,
                "attrs": []
            }

            # Пытаемся получить все атрибуты
            for attr in dir(field):
                if not attr.startswith("_"):
                    try:
                        value = getattr(field, attr)
                        if not callable(value):
                            info["attrs"].append(f"{attr}={value}")
                    except Exception:
                        pass

            audio_fields.append(info)
            console.print(f"[green]Found:[/green] {fieldname} ({type(field).__name__})")
            if info["attrs"]:
                console.print(f"  Attributes: {', '.join(info['attrs'][:10])}")  # Первые 10 атрибутов

    sw.on("change", on_any_change)

    console.print(f"[yellow]Connecting to ATEM at {ip}:9910 ...[/yellow]")
    console.print("[yellow]Listening for audio-related fields... (Press Ctrl+C to stop)[/yellow]\n")
    
    try:
        sw.connect()
        
        # Слушаем изменения в течение некоторого времени
        import time
        start_time = time.time()
        while time.time() - start_time < 30:  # 30 секунд
            sw.loop()
            time.sleep(0.01)
        
        console.print(f"\n[green]Collected {len(audio_fields)} audio-related fields[/green]\n")
        
        # Выводим таблицу с результатами
        if audio_fields:
            table = Table(title="Audio-related fields found")
            table.add_column("Field Name", style="cyan")
            table.add_column("Type", style="magenta")
            table.add_column("Attributes", style="yellow")
            
            # Убираем дубликаты по имени поля
            seen = set()
            for info in audio_fields:
                if info["fieldname"] not in seen:
                    seen.add(info["fieldname"])
                    attrs_str = "\n".join(info["attrs"][:5])  # Первые 5 атрибутов
                    table.add_row(
                        info["fieldname"],
                        info["type"],
                        attrs_str if attrs_str else "—"
                    )
            
            console.print(table)
        else:
            console.print("[red]No audio-related fields found. Try making some changes in ATEM.[/red]")
            
    except KeyboardInterrupt:
        console.print("\n[yellow]Stopped by user[/yellow]")
    except Exception as e:
        console.print(f"[red]Error: {e}[/red]")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python atem_audio_logger.py <ATEM_IP> [--all] [--ar]")
        sys.exit(1)
    args = sys.argv[2:]
    main(sys.argv[1], log_all="--all" in args, only_ar="--ar" in args)
