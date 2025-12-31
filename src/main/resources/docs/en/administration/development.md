---
title: Development
---

Since the project uses Maven, you can use the following algorithm to configure the development environment :

#### Setting up the environment and client part

Install lsFusion development platform, except for the server part (Server), as described at https://docs.lsfusion.org/Development_auto/.

As a password for PostgreSQL preferably use 11111.

#### Configuring the server part

1. Do Get from VCS in the start menu or Git / Clone, using https://github.com/lsfusion-solutions/mycompany.git as the source .
2. Wait for IntelliJ IDEA to create the project and download all dependencies using Maven (may take a few minutes).
3. Check that Java Development Kit has been successfully found. To do this, go to File / Project Structure form and check that Project / SDK field is set.
4. Create the configuration for running the lsFusion server. To do this, in Run / Edit Configurations form you need to click **+**, and then select lsFusion Server. Verify that Working Directory points to the folder where pom.xml is located.
5. Run server through Run / Run `<configuration name>` menu item.

#### Building a jar file to run on the server

After making changes to the application source code to build the final jar file, you need to :

1. In File / Project Structure form you need to go to Artifacts item and press **+** button and select Jar / Empty project.
2. In Output Directory field choose the directory where you want to place the assembled jar file.
3. From Available Elements list transfer the 'mycompany' compile output element to the jar file. Then press OK.
4. Then select Build / Build artifacts in the menu item. Then select Build.

With the artifact you can replace the old file, which is on the server in the folder /var/lib/lsfusion or C:\Program Files\lsFusion 6\Server\lib, and restart the service on the server.

### Adding new modules on the server

If you need to connect new modules, you can do it not via jar files but by simply adding new files to the classpath. In this case, the steps are as follows:

1. Create, for example, a new module `MyCompanyCustom.lsf` that depends on the `MyCompanyRu` module and put it into `/var/lib/lsfusion`.
2. Change the top module of the application. To do this, in `/etc/lsfusion6-server/settings.properties` change (or add) the parameter `logics.topModule = MyCompanyCustom`.
3. Restart the server service (as described above).
4. If you need to connect additional modules, put them into `/var/lib/lsfusion` as well and add them to the REQUIRE section of the `MyCompanyCustom` module.

Example `MyCompanyCustom` module:

```
MODULE MyCompanyCustom;

REQUIRE MyCompany;

<new code>
```