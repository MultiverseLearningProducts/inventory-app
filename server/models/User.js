const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const User = sequelize.define('users', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.NUMBER,
  })

  module.exports = {
  User
  }