# User Management System
A CRUD Application built using Nodejs, Express and MongoDB


## Tech stack

## Screens

## FOR Assignment 3
#Backend
docker run -d --name backend --network assignment3 -p 8080:8080 -v "$(pwd)/backend:/home/customuser/app" -v server-data:/home/customuser/app/data docker-backend-api:1
#Frontend
docker run -d --name frontend --network assignment3 -p 3000:3000 -v "$(pwd)/frontend:/app" docker-frontend-api:1
