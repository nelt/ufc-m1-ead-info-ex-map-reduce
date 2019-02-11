#!/usr/bin/env bash

JAR="${HOME}/workspaces/ufc/mr-simulation/mr-simulation-app/target/mr-simulation-app-1.0.0-SNAPSHOT-jar-with-dependencies.jar"

java -jar $JAR "$@"
