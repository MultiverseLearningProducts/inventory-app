const {sequelize} = require('../db')

const {Item} = require('./Item')


// Relationships

module.exports = {
  db: sequelize,
  Item
};
