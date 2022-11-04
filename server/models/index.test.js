const {Item} = require('./index');
const {sequelize} = require('../db'); //may be called something else
const {items} = require('../seedData');


describe('Item', () => {

    beforeAll(async() => {
        await sequelize.sync({force: true});
    })

    test("Create new item", async () => {
        const backpack = await Item.create(items[0])

        expect(backpack.price).toEqual(109.95);
        // expect(backpack.description).toBe("board description");
        // expect(backpack.rating).toBe(5);
    })
})