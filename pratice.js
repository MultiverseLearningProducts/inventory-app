//tests for item 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

describe('Item Model Tests', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });
    test('can find Item', async () => {
        const foundItem = await Items.findByPk(1)
        expect(foundItem.title).toEqual('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    });
    
