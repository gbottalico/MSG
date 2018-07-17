<h2> Software requirements

1. Tomcat 9
2. Apache
3. MySQL server


<h3> Database

Eseguire lo script [msg.sql](https://github.com/gbottalico/MSG/blob/master/MGS/msg.sql) in MySQL server per creare il database


<h3> Backend

Copiare il [file WAR](Https://github.com/gbottalico/MSG/tree/master/MGS/dist/msg.war) nella cartella {TOMCAT_HOME}/webapps/ ed eseguire Tomcat.
Il backend REST sará raggiungibile all'indirizzo {TOMCAT_IP_ADDRESS}/msg/api/place per gestire i luoghi e {TOOMCAT_IP_ADDRESS}/msg/visit per gestire le visite


<h3> Frontend
