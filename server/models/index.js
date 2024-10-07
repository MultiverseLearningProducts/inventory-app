const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Items = sequelize.define("items", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Items,
};
