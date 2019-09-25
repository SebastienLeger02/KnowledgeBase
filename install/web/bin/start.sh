#!/bin/sh

SCALA_SERVER_HOME=/home/ubuntu/javaServer
echo  "Starting Java server"
java -jar -Dspring.profiles.active="production" -Djava.security.egd=file:/dev/./urandom $SCALA_SERVER_HOME/FLW*.jar >> $SCALA_SERVER_HOME/log 2>&1 &
PID=$!
echo $PID > $SCALA_SERVER_HOME/pid
echo "Java server started with id $PID"