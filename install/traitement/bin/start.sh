#!/bin/sh

SCALA_SERVER_HOME=/home/ubuntu/scalaServer
echo  "Starting scala server"
#java -jar $SCALA_SERVER_HOME/scala*.jar > $SCALA_SERVER_HOME/log 2>&1 &
java -cp $SCALA_SERVER_HOME/scala_2.11-0.1.jar:$SCALA_SERVER_HOME/libs/* flw.trinov.scala.FileServer  > $SCALA_SERVER_HOME/log 2>&1 &
PID=$!
echo $PID > $SCALA_SERVER_HOME/pid
echo "Scala server started with id $PID"