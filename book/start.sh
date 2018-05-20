#!/bin/bash

image_name=book

docker build -t $image_name .
docker run -p 3002:3000 -d $image_name