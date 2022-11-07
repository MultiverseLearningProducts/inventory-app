const {sequelize} = require('../db')

const {Item} = require('./Item')
const {User} = require('./User')
const {Cart} = require('./Cart')

// Relationships
Cart.hasMany(Item)
Cart.belongsTo(Cart)
Item.belongsTo(Cart)
User.hasOne(Cart)

module.exports = {
  db: sequelize,
  Item,
  Cart,
  User
};
