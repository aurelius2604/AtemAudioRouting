"""ATEM network discovery (mDNS + parallel UDP subnet scan)."""
import socket
import struct
import threading
import time
from concurrent.futures import ThreadPoolExecutor
from typing import Optional


def local_subnet_prefixes() -> list:
    """Возвращает список префиксов /24 всех активных сетевых интерфейсов."""
    prefixes = set()
    # Предпочтительный способ: ifaddr перечисляет все интерфейсы
    try:
        import ifaddr
        for adapter in ifaddr.get_adapters():
            for ip in adapter.ips:
                if isinstance(ip.ip, str) and not ip.ip.startswith("127.") and not ip.ip.startswith("169.254"):
                    prefixes.add(".".join(ip.ip.split(".")[:3]))
    except Exception:
        pass
    # Fallback через getaddrinfo
    if not prefixes:
        try:
            for info in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
                ip = info[4][0]
                if not ip.startswith("127."):
                    prefixes.add(".".join(ip.split(".")[:3]))
        except Exception:
            pass
    # Финальный fallback через UDP trick
    if not prefixes:
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            s.connect(("8.8.8.8", 80))
            ip = s.getsockname()[0]
            s.close()
            prefixes.add(".".join(ip.split(".")[:3]))
        except Exception:
            pass
    return list(prefixes)


def _udp_probe_host(host: str, syn_pkt: bytes, timeout: float) -> Optional[str]:
    """Отправляет ATEM SYN-пакет на хост и ждёт ответа."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.settimeout(timeout)
        s.sendto(syn_pkt, (host, 9910))
        data, _ = s.recvfrom(64)
        if len(data) >= 12:
            return host
    except Exception:
        pass
    finally:
        try:
            s.close()
        except Exception:
            pass
    return None


def _discover_atems_udp(timeout: float = 0.5) -> list:
    """Параллельное UDP-сканирование подсетей на порт 9910."""
    import random
    session_id = random.randint(1, 0xFFFF)
    # Минимальный ATEM SYN-пакет (12 байт): flags|len, session, ack, 2x padding, seq_remote, seq_local
    syn_pkt = struct.pack(">HHH 2x HH", (1 << 11) | 12, session_id, 0, 0, 0)

    prefixes = local_subnet_prefixes()
    if not prefixes:
        return []

    all_hosts = [f"{p}.{i}" for p in prefixes for i in range(1, 255)]
    found = []
    with ThreadPoolExecutor(max_workers=80) as ex:
        for result in ex.map(lambda h: _udp_probe_host(h, syn_pkt, timeout), all_hosts):
            if result:
                found.append({"ip": result, "name": "ATEM"})
    return found


def _discover_atems_mdns(timeout: float = 3.0) -> list:
    """Поиск через mDNS (Bonjour) — _blackmagic._tcp.local."""
    try:
        import ipaddress as _ip

        from zeroconf import ServiceBrowser, Zeroconf
    except ImportError:
        return []

    results = []

    class _Listener:
        def add_service(self, zc, type_, name):
            info = zc.get_service_info(type_, name)
            if not info:
                return
            if info.properties.get(b"class") != b"AtemSwitcher":
                return
            addr = str(_ip.ip_address(info.addresses[0]))
            label = info.properties.get(b"name", b"").decode("utf-8", errors="ignore") or "ATEM"
            results.append({"ip": addr, "name": label})

        def remove_service(self, *_): pass
        def update_service(self, *_): pass

    zc = Zeroconf()
    try:
        ServiceBrowser(zc, "_blackmagic._tcp.local.", _Listener())
        time.sleep(timeout)
    finally:
        zc.close()
    return results


def discover_atems(extra_ip: Optional[str] = None) -> list:
    """Ищет через mDNS и UDP-скан параллельно."""
    mdns_results: list = []
    udp_results: list = []

    def _mdns():
        mdns_results.extend(_discover_atems_mdns(timeout=2.5))

    def _udp():
        udp_results.extend(_discover_atems_udp(timeout=0.5))

    t1 = threading.Thread(target=_mdns, daemon=True)
    t2 = threading.Thread(target=_udp, daemon=True)
    t1.start()
    t2.start()
    t1.join()
    t2.join()

    combined = mdns_results + udp_results

    # Пробуем ранее сохранённый IP напрямую
    if extra_ip and extra_ip not in {d["ip"] for d in combined}:
        import random
        session_id = random.randint(1, 0xFFFF)
        syn_pkt = struct.pack(">HHH 2x HH", (1 << 11) | 12, session_id, 0, 0, 0)
        if _udp_probe_host(extra_ip, syn_pkt, timeout=0.8):
            combined.append({"ip": extra_ip, "name": "ATEM (последний)"})

    # Дедупликация по IP
    seen: set = set()
    unique = []
    for d in combined:
        if d["ip"] not in seen:
            seen.add(d["ip"])
            unique.append(d)
    return unique
