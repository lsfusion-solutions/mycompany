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

### Aktualizacja wersji PostgreSQL {#postgres-upgrade}

W `compose.yaml` ustalona jest wersja główna PostgreSQL. Wersje główne PostgreSQL są wzajemnie niekompatybilne pod względem formatu danych na dysku, dlatego po zmianie wersji obrazu kontener bazy danych nie uruchomi się, dopóki baza nie zostanie zmigrowana.

Począwszy od wersji 18 obraz PostgreSQL przechowuje dane każdej wersji w osobnym podfolderze (np. `18/docker`) i montuje folder danych pod ścieżką `/var/lib/postgresql` ([szczegóły](https://github.com/docker-library/postgres/pull/1259)). W wersjach starszych niż 18 dane znajdowały się w korzeniu folderu `docker-db`, montowanego pod ścieżką `/var/lib/postgresql/data`. Dlatego przy przejściu z wersji 17 i niższych w `compose.yaml`, oprócz wersji obrazu, zmienia się także ścieżka montowania:

```yml
  db:
    image: postgres:18
    volumes:
      - ./docker-db:/var/lib/postgresql
```

Przy kolejnych przejściach między wersjami 18 i wyższymi ścieżka montowania już się nie zmienia — tylko wersja obrazu.

Przed migracją dowolnym ze sposobów upewnij się, że masz świeżą kopię zapasową bazy (na przykład kopię folderu `docker-db` wykonaną przy zatrzymanych kontenerach).

Bazę można zmigrować na jeden z następujących sposobów:

- Zrzut i przywrócenie — zalecany sposób dla większości instalacji: nowy klaster jest inicjalizowany przez obraz w zwykły sposób, a dane są ładowane do niego standardowym [pg_dumpall](https://www.postgresql.org/docs/current/app-pg-dumpall.html):

  ```bash
  docker compose exec db pg_dumpall -U postgres > backup.sql   # przy działającej starej wersji;
                                                               # plik powstaje obok compose.yaml
  docker compose down
  # zmień nazwę folderu docker-db (np. na docker-db-old) - stare dane pozostaną
  # kopią zapasową, a nowy kontener utworzy czysty klaster; zaktualizuj compose.yaml
  docker compose up -d db
  docker compose exec -T db psql -U postgres < backup.sql
  docker compose up -d
  ```

- Skrypt migracji — dla dużych baz, gdy zrzut i przywrócenie zajmują zbyt dużo czasu. Skrypt jest przeznaczony dla standardowej instalacji opisanej na tej stronie. Pobierz z [centralnego serwera](https://download.lsfusion.org/docker/) skrypt `pg-migrate.bat` (Windows) lub `pg-migrate.sh` (Linux) razem z `pg-migrate-container.sh` do folderu `$FUSION_DIR$`. Ustaw w `compose.yaml` nową wersję obrazu (a przy przejściu z wersji 17 i niższych — nową ścieżkę montowania), po czym uruchom skrypt. Skrypt automatyzuje kroki specyficzne dla obrazu Docker: zatrzymuje kontenery, tworzy kopię zapasową folderu `docker-db` (w `docker-db-backup`), wykrywa wersję źródłową i układ danych, a po migracji ponownie uruchamia kontenery. Samą migrację wykonuje standardowy [pg_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html). Skrypt nie przenosi własnych ustawień `postgresql.conf`. Stary klaster pozostanie w podfolderze `docker-db` ze starą wersją — usuń go razem z kopią zapasową po sprawdzeniu poprawności działania.

W przypadku niestandardowych konfiguracji (replikacja, zmodyfikowane obrazy lub układ danych) użyj standardowej procedury [aktualizacji PostgreSQL](https://www.postgresql.org/docs/current/upgrading.html).