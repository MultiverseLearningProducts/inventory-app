const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Cart = sequelize.define('carts', {
    products: Sequelize.NUMBER,
    quantity: Sequelize.NUMBER,
    total: Sequelize.NUMBER,
  })

  module.exports = {
  Cart
  }