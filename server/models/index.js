const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')


const Item = sequelize.define("items", {
  image: Sequelize.STRING,
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  price: Sequelize.BIGINT
});

const User = sequelize.define("users", {
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
})



User.hasMany(Item)
Item.belongsTo(User)

module.exports = {
  db: sequelize,
  Item,
  User,
};


