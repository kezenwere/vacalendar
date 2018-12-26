#!/bin/sh
echo "********************************************************"
echo "Starting vaCalendar Services                           "
echo "********************************************************"
java -Dspring.profiles.active=$PROFILE                                   \
     -Dserver.port=$SERVER_PORT   \
     -Dspring.datasource.password=$MYSQL_DB_PASSWORD                                                      \
     -jar /usr/local/vacalendar/vaCalendar.jar
