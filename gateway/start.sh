#!/bin/bash

image_name=gateway

docker build -t $image_name .
docker run -p 8080:8000 $image_name