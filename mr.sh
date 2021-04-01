#!/usr/bin/env bash

docker run --rm -it -v $PWD:/work  codingmatters/mr-simulation-app:1.0.3 mr "$@"
