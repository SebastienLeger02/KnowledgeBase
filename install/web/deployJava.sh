#!/bin/sh

DIR="$( cd "$( dirname $0 )" && pwd )"

cd $DIR/../web/src/main/resources/static/extjsGPL
sencha app build
mv build/production/FLW/* ../
cd ..
rm -rf extjs
mv index.html ../templates/app.html

cd $DIR

gradle build

#build/libs/FLW*jar
