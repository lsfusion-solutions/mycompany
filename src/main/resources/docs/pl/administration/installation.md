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

### Aktualizacja MyCompany

Aby zaktualizować tylko logikę aplikacji MyCompany, wymień plik jar MyCompany w classpath serwera lsFusion. Zastąp `6.2-SNAPSHOT` wymaganą wersją. Plik jar jest publikowany pod adresem `https://download.lsfusion.org/solutions/mycompany-<version>.jar`.

#### Linux

1. Zatrzymaj usługę `lsfusion6-server`.
2. Usuń stary plik `mycompany*.jar` z `/var/lib/lsfusion`.
3. Pobierz `https://download.lsfusion.org/solutions/mycompany-6.2-SNAPSHOT.jar`.
4. Umieść pobrany plik jar w `/var/lib/lsfusion`.
5. Uruchom usługę `lsfusion6-server`.
6. Sprawdź log uruchomienia w `/var/log/lsfusion6-server/start.log`.

#### Windows

1. Zatrzymaj usługę `lsFusion 6 Server`.
2. Usuń stary plik `mycompany*.jar` z `C:\Program Files\lsFusion 6\Server\lib`.
3. Pobierz `https://download.lsfusion.org/solutions/mycompany-6.2-SNAPSHOT.jar`.
4. Umieść pobrany plik jar w `C:\Program Files\lsFusion 6\Server\lib`.
5. Uruchom usługę `lsFusion 6 Server`.

W katalogu classpath powinien pozostać tylko jeden plik jar MyCompany przed uruchomieniem usługi.
