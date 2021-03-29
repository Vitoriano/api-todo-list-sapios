## API Todo-List - Teste Sapios

## Video Walkthrough of Todo-List

> https://youtu.be/S5vlGHeQXuE

# Installation 

  ## Easy Way

    # Go into the backend directory and run

     docker-compose up -d
  
  ## Hard Way

  ```bash
# Install MySQL on your machine

# Create database called 'sapios'
create database sapios

# Add environment database variables to the .env file 

# Clone this repository
git clone https://github.com/Vitoriano/api-todo-list-sapios.git

# Go into the backend directory
cd api-todo-list-sapios

# Install dependencies
npm install

# Run migrations
npm run migrate

# Run seeds
npm run seed

# Start the server
npm start


```

## Features

- [x] API Rest with express
- [x] Task Manager Api Endpoints
- [x] Container based development using **Docker**


## Technology Stack

  - Node.js
  - Express
  - Mysql
  - Knex.js
  - Docker
  - Sockte.io