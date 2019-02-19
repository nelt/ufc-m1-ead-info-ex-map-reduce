#!/usr/bin/env bash

SCRIPT="$(readlink --canonicalize-existing "$0")"
SCRIPTPATH="$(dirname "$SCRIPT")"

JAR="$SCRIPTPATH/mr.jar"
if [ ! -f "$JAR" ]; then
    echo "$JAR non trouvé, pour exécuter les corrigés, télécharger au préalable la dernière release sur https://github.com/nelt/mr-simulation/releases"
    exit 1
fi

java -jar "$JAR" "$@"
