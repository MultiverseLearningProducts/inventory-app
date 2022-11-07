const item = require('./index');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

describe('Item Model Tests', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });
    test('can find item', async () => {
        const foundItem = await Item.findByPk(1)
        expect(foundItem.title).toEqual('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    });
    test('can find all items', async () => {
        await Item.create(seedItem[0])
        const findAllItems = await Item.findAll()
        expect(findAllItems[0].price).toEqual(109.95);
    })
    test('can create item', async () => {
        const createdItem = await Item.create(seedItems[0]) 
        expect(createdItem.title).toBe(seedItems[0].title);
    });
    test('can delete an item', async () => {
        const removedItem = await Item.destroy(seedItems[0])
        expect(removedItem.title).toEqual('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    });
})
