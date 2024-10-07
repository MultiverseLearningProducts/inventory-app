const {sauces, items} = require('./seedData.js');

const {db} = require('./db');
const {Sauce} = require('./models');
const {Item} = require('./models/Item.js');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await db.sync({ force: true });
    
        // insert data
        await Promise.all(sauces.map(sauce => Sauce.create(sauce)));
        await Promise.all(items.map(item => Item.create(item)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
