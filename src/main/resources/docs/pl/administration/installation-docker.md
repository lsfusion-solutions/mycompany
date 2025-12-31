---
title: Instalacja Docker
---

Aby pracować z kontenerami Docker, musisz zainstalować [Docker](https://docs.docker.com/get-docker/) oraz [Docker Compose](https://docs.docker.com/compose/).

### Uruchamianie MyCompany przy użyciu Docker Compose {#docker-platform}

- Pobierz plik `compose.yaml` z [centralnego serwera](https://download.lsfusion.org/solutions/mycompany-docker/) do wybranego folderu (nazwijmy go `$FUSION_DIR$`). Ten plik zawiera ustawienia uruchomienia czterech kontenerów:
    - PostgreSQL
    - Application Server
    - MyCompany
    - Web Client

- Ustawienia `compose.yaml` (opcjonalnie):
    - Jeśli musisz zmienić ustawienia uruchomieniowe (np. użyć innej wersji kontenera albo dostosować zmienne środowiskowe), edytuj plik `compose.yaml` zgodnie z [dokumentacją Dockera](https://docs.docker.com/get-started/overview/).
    - Opcje startowe serwera aplikacji można też ustawić przez zmienne środowiskowe kontenera — w atrybucie `environment`. Na przykład, aby zmienić locale serwera na rosyjskie oraz ustawić własną wartość Xmx, wpisz:
       ```yml
       environment:
         - USER_SETLANGUAGE=pl
         - USER_SETCOUNTRY=PL 
         - JAVA_OPTS=-Xmx10g
       ```
  Podczas wyszukiwania parametrów startowych w zmiennych środowiskowych Spring automatycznie konwertuje je na wielkie litery i zamienia kropki na podkreślenia. W powyższym przykładzie wartości zmiennych środowiskowych zostaną podstawione do odpowiadających im parametrów: `user.setLanguage` oraz `user.setCountry`.
    - Dostępne obrazy kontenerów lsFusion:
        - [Server](https://hub.docker.com/r/lsfusion/server/tags)
        - [Client](https://hub.docker.com/r/lsfusion/client/tags)

- Uruchomienie kontenerów:

  Przejdź do folderu `$FUSION_DIR$` i uruchom polecenie:
    ```bash
     docker compose up -d
    ```
  Po zakończeniu uruchamiania klient web będzie dostępny pod adresem: `http://localhost:8080/`.

- Praca z plikami projektu:
  Po pierwszym uruchomieniu w folderze `$FUSION_DIR$` zostaną utworzone podfoldery:
    - `docker-client-conf` — konfiguracja klienta.
    - `docker-db` — pliki bazy danych.
    - `docker-server` — pliki serwera.

  Te katalogi są bind-mountowane do odpowiednich kontenerów.

    - Do folderu `docker-server` wstaw moduły językowe lsFusion (pliki `.lsf` lub foldery z nimi), a także dodatkowe zasoby (raporty, pliki Java, obrazy, CSS, JS itd.). W tym samym folderze znajdują się też logi serwera oraz plik `settings.properties`.