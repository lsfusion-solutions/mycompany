---
title: Installation
---

To install the solution, you will need a server running a Linux or Windows operating system that is connected to the Internet.

It must have a minimum of 4 gigabytes of RAM and open ports 8080 for web client operation and 7652 for desktop client operation.

### RHEL 8+ / CentOS 8+ / Fedora 35+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos8.sh)
```

### Ubuntu 18+ / Debian 9+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-ubuntu18.sh)
```

You can see the lsFusion server startup log in /var/log/lsfusion6-server/start.log .

To increase the amount of memory allocated to the application, you need to edit the -Xmx parameter in /etc/lsfusion6-server/lsfusion.conf and /etc/lsfusion6-client/lsfusion.conf. You must then restart the services.

### Windows installation

1. Download and run lsFusion platform installer (execution) : https://docs.lsfusion.org/Execution_auto/.
2. Download the assembled jar file with MyCompany logic from https://download.lsfusion.org/solutions/mycompany-6.1.jar.
3. Put the downloaded jar file to the directory C:\Program Files\lsFusion 6\Server\lib.
4. Restart lsFusion 6 Server service.

### Log in to MyCompany

1.  Open MyCompany web interface in your browser **http://your-server-ip:8080**
2.  In the open window sign in using login admin without password.