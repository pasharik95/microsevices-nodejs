# microsevices-nodejs

There is test task.
I used microservices architecture by docker containers.

There are 2 microservices:
    Microservice 'User' uses container with MongoDb.
    Microservice 'Book' uses container with PostgresDB.

There is 'gateway'. Gateway works on 8000 port and send request to microservices

## Getting Started

git clone https://github.com/pasharik95/microsevices-nodejs.git

### Prerequisites

Ubuntu 16.04
NodeJS v10.0.0
Docker 17.05.0
docker-compose 1.8.0


### Installing

Install NodeJS

```
sudo apt-get install nodejs
sudo apt-get install npm
```


Install Docker

```
sudo apt-get install docker-ce
```

Install docker-compose

```
sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
```

### Run

```
1) chmod +x start.sh
2) ./start.sh
```

### API
    User: 
        - Get all:
            url - /api/v1/users
            method - GET
        - Get one by id:
            url - /api/v1/users/{user_id}
            method - GET
        - Create: 
            url - /api/v1/users/
            method - POST
            content-type - application/x-www-form-urlencoded
            body - username, first_name, last_name, phone
        - Update: 
            url - /api/v1/users/{user_id}
            method - PUT
            content-type - application/x-www-form-urlencoded
            body - username, first_name, last_name, phone
        - Delete: 
            url - /api/v1/users/{user_id}
            method - Delete
        
    Book: /api/vq/books
        - Get all:
            url - /api/v1/books
            method - GET
        - Get one by id:
            url - /api/v1/books/{book_id}
            method - GET
        - Create: 
            url - /api/v1/books/
            method - POST
            content-type - application/x-www-form-urlencoded
            body - name, author, pages
        - Update: 
            url - /api/v1/books/{book_id}
            method - PUT
            content-type - application/x-www-form-urlencoded
            body - name, author, pages
        - Delete: 
            url - /api/v1/books/{book_id}
            method - Delete

### Gateway
The gateway works on 8000 port.

## Author

* **Pavlo Servatovych** - *Initial work* - [PavloServatovych](https://github.com/pasharik95)
