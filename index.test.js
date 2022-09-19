const { sequelize } = require("./server/db");
const {Item} = require('./server/models')

describe('Testing', () => {
    beforeAll(async () => {
        
        await sequelize.sync({ force: true });
    })
    test('Testing find all', async () => {
        //Testing find all
        
        const foundAllItems = await Item.findAll();
        expect(foundAllItems[0].title).toEqual("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
        expect(foundAllItems[0].price).toEqual(109.95)
        expect(foundAllItems[0].description).toEqual("Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday")
        expect(foundAllItems[0].category).toEqual("men's clothing")
        expect(foundAllItems[0].image).toEqual("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")
        
    })
    test('Testing by item', async () => {
        //Testing find by items
        const foundOnlyItem= await Item.findByPk(id);
        expect(foundOnlyItem.length).toBe(1);
    })

})