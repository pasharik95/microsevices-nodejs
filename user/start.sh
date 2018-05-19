#!/bin/bash

image_name=user

docker build -t $image_name .
docker run -p 3001:3000 -d $image_name