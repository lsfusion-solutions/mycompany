---
title: Installation Docker
---

You must install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/) to work with Docker containers.

### Launching Mycompany using Docker Compose {#docker-platform}

- Download the `compose.yaml` file from [central server](https://download.lsfusion.org/solutions/mycompany-docker/) to a folder of your choice (we'll call it `$FUSION_DIR$`). This file contains settings for running four containers:
    - PostgreSQL
    - Application Server
    - MyCompany
    - Web Client

- The `compose.yaml` setting (optional):
    - If you need to change the startup settings (e.g., use a different container version or customize environment variables), edit the `compose.yaml` file according to the [Docker documentation](https://docs.docker.com/get-started/overview/).
    - Application server startup options can also be set using the container's environment variables - in the environment attribute. For example, to change the server locale to Russian and set custom Xmx value, write:
       ```yml
       environment:
         - USER_SETLANGUAGE=us
         - USER_SETCOUNTRY=US  
         - JAVA_OPTS=-Xmx10g
       ```
  When searching for startup parameters in environment variables, Spring automatically converts them to uppercase and replaces dots with underscores. In the example above, the values of the environment variables will be substituted into the corresponding parameters: `user.setLanguage` and `user.setCountry`.
    - Available lsFusion container images:
        - [Server](https://hub.docker.com/r/lsfusion/server/tags)
        - [Client](https://hub.docker.com/r/lsfusion/client/tags)

- Starting the containers:

  Go to the `$FUSION_DIR$` folder and run the command:
    ```bash
     docker compose up -d
    ```
  Once the launch is complete, the web client will be available at: `http://localhost:8080/`.

- Working with project files:
  After the first launch, subfolders will be created in the `$FUSION_DIR$` folder:
    - `docker-client-conf` - client configuration.
    - `docker-db` - database files.
    - `docker-server` - server files.

  These directories are bind-mounted into their respective containers.

    - In the `docker-server` folder put the lsFusion language modules (`.lsf` files or folders with them), as well as additional resources (reports, Java files, images, CSS, JS, etc.). The server logs and the `settings.properties` file are also in the same folder.

### Upgrading PostgreSQL {#postgres-upgrade}

The `compose.yaml` file pins the major PostgreSQL version. Major PostgreSQL versions are incompatible with each other in the on-disk data format, so after changing the image version the DB container will not start until the database is migrated.

Starting with version 18, the PostgreSQL image stores the data of each version in a separate subfolder (e.g. `18/docker`) and mounts the data folder at `/var/lib/postgresql` ([details](https://github.com/docker-library/postgres/pull/1259)). In versions before 18, the data was located in the root of the `docker-db` folder, which was mounted at `/var/lib/postgresql/data`. Therefore, when upgrading from version 17 or lower, both the image version and the mount path change in `compose.yaml`:

```yml
  db:
    image: postgres:18
    volumes:
      - ./docker-db:/var/lib/postgresql
```

For subsequent upgrades between versions 18 and higher the mount path no longer changes — only the image version.

Before migrating by either method, make sure you have a fresh backup of the database (for example, a copy of the `docker-db` folder taken while the containers are stopped).

The database can be migrated in one of the following ways:

- Dump and restore — the recommended method for most installations: the new cluster is initialized by the image in the normal way, and the data is loaded into it with the standard [pg_dumpall](https://www.postgresql.org/docs/current/app-pg-dumpall.html):

  ```bash
  docker compose exec db pg_dumpall -U postgres > backup.sql   # while the old version is still running;
                                                               # the file is created next to compose.yaml
  docker compose down
  # rename the docker-db folder (e.g. to docker-db-old) - the old data remains
  # as a backup while the new container creates a fresh cluster; update compose.yaml
  docker compose up -d db
  docker compose exec -T db psql -U postgres < backup.sql
  docker compose up -d
  ```

- Migration script — for large databases, when dump and restore takes too much time. The script is intended for the standard installation described on this page. Download the `pg-migrate.bat` (Windows) or `pg-migrate.sh` (Linux) script together with `pg-migrate-container.sh` from the [central server](https://download.lsfusion.org/docker/) to the `$FUSION_DIR$` folder. Set the new image version in `compose.yaml` (and, when upgrading from 17 or lower, the new mount path), then run the script. The script automates the steps specific to the Docker image: it stops the containers, makes a backup copy of the `docker-db` folder (in `docker-db-backup`), detects the source version and data layout, and starts the containers again after the migration. The migration itself is performed by the standard [pg_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html). The script does not carry over custom `postgresql.conf` settings. The old cluster remains in the `docker-db` subfolder with the old version — delete it together with the backup copy after making sure everything works.

For non-standard configurations (replication, modified images or data layout), use the standard PostgreSQL [upgrade procedure](https://www.postgresql.org/docs/current/upgrading.html).