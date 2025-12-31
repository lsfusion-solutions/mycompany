---
title: Установка
---

Для установки решения потребуется сервер под управлением операционной системы Linux или Windows с подключением к Интернет.

На нем должно быть минимум 4 гигабайта оперативной памяти и должны быть открыты порты 8080 для работы веб-клиента и 7652 для работы десктоп-клиента.

### RHEL 8+ / CentOS 8+ / Fedora 35+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-centos8-ru.sh)
```

### Ubuntu 18+ / Debian 9+
```
source <(curl -s https://download.lsfusion.org/solutions/install-mycompany-ubuntu18-ru.sh)
```

Лог запуска сервера lsFusion можно посмотреть в /var/log/lsfusion6-server/start.log .

Чтобы увеличить количество памяти, выделяемую приложению, нужно отредактировать параметр -Xmx в файлах /etc/lsfusion6-server/lsfusion.conf и /etc/lsfusion6-client/lsfusion.conf. После этого необходимо перезапустить службы :

Серверная часть :
```
systemctl stop lsfusion6-server
systemctl start lsfusion6-server
```
Клиентская часть :
```
systemctl stop lsfusion6-client
systemctl start lsfusion6-client
```


### Windows

1. Скачать и запустить установщик платформы lsFusion для выполнения: https://docs.lsfusion.org/ru/Execution_auto/.
2. Скачать собранный jar-файл с логикой MyCompany по ссылке https://download.lsfusion.org/solutions/mycompany-6.1.jar.
3. Поместить скачанный jar-файл в директорию C:\Program Files\lsFusion 6\Server\lib.
4. Добавить в файл C:\Program Files\lsFusion 6\Server\conf\settings.properties строку `logics.topModule = MyCompanyRu`.
5. Перезапустить службу lsFusion 6 Server.

### Войти в MyCompany

1.  Открыть в браузере web-интерфейс MyCompany **[http://ip-вашего-сервера:8080](http://ip-вашего-сервера:8080)**
2.  В открывшемся окне авторизоваться под пользователем **admin** без пароля

![](/img/Installation_1.png)