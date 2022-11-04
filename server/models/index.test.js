const {Item} = require('./index');
const {sequelize} = require('../db');
const {items} = require('../seedData');
import 'regenerator-runtime/runtime';


describe('Item', () => {

    beforeAll(async() => {
        await sequelize.sync({force: true});
    })

    test("Successfully create new Item", async () => {
        const backpack = await Item.create(items[0]);

        expect(backpack.price).toEqual(109.95);
        expect(backpack.category).toBe("men's clothing");
        expect(backpack.image).toBe("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");
    })
})