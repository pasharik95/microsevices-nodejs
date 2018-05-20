#!/bin/bash

# Start microservices
docker-compose up -d --build

# Start gateway
cd gateway
npm install
npm start -&
