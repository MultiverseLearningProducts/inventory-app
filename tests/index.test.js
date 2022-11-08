const {sequelize} = require("../server/db")
const { Item } = require("../server/models/index");


describe('Tests back-end routes', () => {
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });
    test('can create a Item', async () => {
        const testItem = await Item.create({
            "title":"Fjallraven",
            "price":300.00,
            "description":"Your perfect pack.",
            "category":"men's clothing",
            "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
         })
        expect(testItem.title).toBe('Fjallraven');
    });
    

    

    

})