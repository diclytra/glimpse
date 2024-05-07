#!/bin/bash

function build {
  echo "info: build glimpse"

  podman build \
  --rm --squash-all \
  -f build.dockerfile \
  -t glimpse \
  .
}

function run {
  echo "info: run glimpse"

  podman run \
  --name glimpse \
  -p 4321:1234 \
  glimpse
}

case "$1" in
  build)
    build
  ;;
  run)
    run
  ;;
  *)
    echo "Use: build, run..."
  ;;
esac

