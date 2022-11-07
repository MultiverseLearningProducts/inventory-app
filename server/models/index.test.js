const {Item} = require('./index');
const {sequelize} = require('../db');
const {items} = require('../seedData');
import 'regenerator-runtime/runtime';


describe('Item', () => {

    beforeAll(async() => {
        await sequelize.sync({force: true});
    })

    // TEST FOR ITEM MODEL
    test("Successfully create new Item", async () => {
        const backpack = await Item.create(items[0]);

        expect(backpack.price).toEqual(109.95);
        expect(backpack.category).toBe("men's clothing");
        expect(backpack.image).toBe("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");
    })

    //TEST FOR GET ALL ITEMS ROUTE /routes/item.js
    test('Item Route: Can find all items', async () => {

        const allItems = await Item.findAll()
        // console.log(foundRes)
        expect(allItems[0].title).toEqual(allItems[0].title)
        expect(allItems[0].price).toEqual(109.95)
    });

    //TEST FOR GET SINGLE ITEM ROUTE /routes/item.js
    test('Item Route: Can find specific item', async () => {
        const foundItem = await Item.findByPk(4);
        expect(foundItem.category).toEqual("men's clothing");
        // expect(foundRestaurant[0].name).toBe(seedRestaurant[0].name);
    });
})