
const {items, carts, users} = require('./seedData.js');

const {sequelize} = require('./db');
const {Item, Cart, User} = require('./models');


const seed = async () => {
  
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(item => Item.create(item)))
        await Promise.all(users.map(user => User.create(user)))
        await Promise.all(carts.map(cart => Cart.create(cart)))

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
