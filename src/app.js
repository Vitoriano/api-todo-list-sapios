const express = require('express')
const routes = require('./routes')
const cors = require('cors')

class AppController {
  constructor() {
    
    this.express = express()
    this.middlewares()
    this.routes()

  }

  middlewares() {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }

  routes() {
    this.express.use(routes)
  } 

}

module.exports = new AppController().express