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