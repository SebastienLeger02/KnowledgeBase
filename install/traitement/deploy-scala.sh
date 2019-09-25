#!/bin/sh

cd scalaServer;
sbt package
mkdir -p target/scala-2.11/libs
find lib_managed -name '*.jar' -exec cp -p '{}' target/scala-2.11/libs ';'
scp target/scala-2.11/*.jar flw-traitement:scalaServer
scp -r target/scala-2.11/libs flw-traitement:scalaServer
ssh flw-traitement 'sudo service scala-server restart'