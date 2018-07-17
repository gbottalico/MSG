# Software requirements

1. Tomcat 8.5 o successive
2. Apache
3. MySQL server


## Database
Eseguire lo script [MSG/msg.sql](https://github.com/gbottalico/MSG/blob/master/MGS/msg.sql) in MySQL server per creare il database

## Backend
Il server usa username: root e password: root per accedere al database.

1. Copiare il [MSG/dist/msg.war](Https://github.com/gbottalico/MSG/tree/master/MGS/dist/msg.war) nella cartella. 
```
{TOMCAT_HOME}/webapps/ 

```
2. Eseguire Tomcat.

Il backend REST sará raggiungibile all'indirizzo

* {TOMCAT_IP_ADDRESS}/msg/api/place per gestire i luoghi
* {TOMCAT_IP_ADDRESS}/msg/api/visit per gestire le visite

## Frontend
1. Sostituire nel file (MSG-frontend/dist/main.js)[https://github.com/gbottalico/MSG/blob/master/MSG-frontend/dist/MSG-frontend/main.js] l'indirizzo IP del server alla riga
```
var BACKEND_URL = 'http://localhost:8080/msg';
```
2. Sostituire nel file (MSG-frontend/dist/main.js.map)[https://github.com/gbottalico/MSG/blob/master/MSG-frontend/dist/MSG-frontend/main.js.map] l'indirizzo IP del server come fatto al passo 1

3. Copiare il contenuto della cartella [MSG-frontend/dist](https://github.com/gbottalico/MSG/tree/master/MSG-frontend/dist) nella cartella {APACHE_HOME}/htdocs ed accedere alla Web Application.
