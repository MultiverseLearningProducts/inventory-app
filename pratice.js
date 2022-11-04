//tests for item 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

describe('Item Model Tests', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });
    test('can find item', async () => {
        const foundItem = await Items.findByPk(1)
        expect(foundItem.title).toEqual('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    });
    test('can create item', async () => {
        const createdItem = await Items.create(seedItems[0]) 
        expect(createdItem.title).toBe(seedItems[0].title)
    });
    test('can delete an item', async () => {
        const removedItem = await Items.destroy(seedItems[0])
        expect(removedItem.title).toEqual('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    });
})
