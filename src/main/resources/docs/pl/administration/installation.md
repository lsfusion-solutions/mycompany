---
title: Instalacja
---

Aby zainstalować rozwiązanie, potrzebujesz serwera z systemem operacyjnym Linux lub Windows, podłączonego do Internetu.

Minimalne wymagania: 4 GB pamięci RAM oraz otwarte porty 8080 (dla klienta web) i 7652 (dla klienta desktop).

### RHEL 8+ / CentOS 8+ / Fedora 35+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos8-pl.sh)
```

### Ubuntu 18+ / Debian 9+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-ubuntu18-pl.sh)
```

Log uruchomienia serwera lsFusion można znaleźć w `/var/log/lsfusion6-server/start.log`.

Aby zwiększyć ilość pamięci przydzielonej aplikacji, należy zmienić parametr `-Xmx` w plikach `/etc/lsfusion6-server/lsfusion.conf` oraz `/etc/lsfusion6-client/lsfusion.conf`. Następnie trzeba zrestartować usługi.

### Instalacja na Windows

1. Pobierz i uruchom instalator platformy lsFusion (tryb execution): https://docs.lsfusion.org/Execution_auto/.
2. Pobierz zbudowany plik jar z logiką MyCompany z https://download.lsfusion.org/solutions/mycompany-6.1.jar.
3. Skopiuj pobrany plik jar do katalogu `C:\Program Files\lsFusion 6\Server\lib`.
4. Zrestartuj usługę **lsFusion 6 Server**.

### Zaloguj się do MyCompany

1. Otwórz interfejs web MyCompany w przeglądarce: **http://your-server-ip:8080**
2. W otwartym oknie zaloguj się używając loginu `admin` bez hasła.