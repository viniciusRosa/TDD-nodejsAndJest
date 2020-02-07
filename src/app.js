const express = require('express')

class AppController {
  constructor() {

    this.express = express()

    this.middlewares()
    this.rotes()
  }

  middlewares() {
    this.express.use(express.json());

  }

  rotes() {
    this.express.use(require('./routes'));

  }
}

module.exports = new AppController().express
