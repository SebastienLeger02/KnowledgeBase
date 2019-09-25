#!/bin/sh

#JDK_URL="http://download.oracle.com/otn-pub/java/jdk/8u102-b14/jdk-8u102-linux-x64.tar.gz"
#JDK_PATH="/usr/lib/jvm/java-8-oracle"

#wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" $JDK_URL -P /tmp
#sudo mkdir -p $JDK_PATH
#sudo tar xzvf /tmp/jdk*tar.gz -C $JDK_PATH --strip-components=1
echo "JAVA_HOME=/usr/lib/jvm/java-8-oracle" | sudo tee -a /etc/environment

sudo add-apt-repository ppa:webupd8team/java
sudo apt-get -y update
sudo apt install oracle-java8-set-default
