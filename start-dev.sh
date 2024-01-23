#! /bin/bash
CONTAINER_NAME=web
IMAGE_NAME=fe
WEB_PORT=4200

docker rm $CONTAINER_NAME -f
docker image rm $IMAGE_NAME -f
docker build -t $IMAGE_NAME -f Dockerfile.dev .
docker run --name $CONTAINER_NAME -p $WEB_PORT:4200 -d --rm $IMAGE_NAME
docker logs $CONTAINER_NAME -f
