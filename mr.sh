#!/usr/bin/env bash

SCRIPT="$(readlink --canonicalize-existing "$0")"
SCRIPTPATH="$(dirname "$SCRIPT")"

JAR="$SCRIPTPATH/mr.jar"
if [ ! -f "$JAR" ]; then
    echo "$JAR non trouvé, pour exécuter les corrigés, télécharger au préalable la dernière release sur https://github.com/nelt/mr-simulation/releases"
    exit 1
fi

# force jdk 11 on ubuntu 
#JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/bin/
#JAVA=/usr/lib/jvm/java-11-openjdk-amd64/bin/java
JAVA=java

JAVA_VERSION=$($JAVA -version 2>&1 | grep -i version | sed 's/.*version "\([0-9]*\)\.\([^"]*\)".*/\1/; 1q')
JAVA_OPTS=
if [[ "$JAVA_VERSION" -ge "11" ]]; then
   JAVA_OPTS="-Dnashorn.args=--no-deprecation-warning"
fi
$JAVA $JAVA_OPTS -jar "$JAR" "$@"
