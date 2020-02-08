const routes = require('express').Router()
const { User } = require('./app/models')

User.create({
  name: 'vinicius',
  email: 'vinicius.rosa00@gmail.com',
  password_hash: 'cscsdcscsdc'
})

module.exports = routes
