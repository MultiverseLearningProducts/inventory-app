// const { DESCRIBE } = require('sequelize/types/query-types')
const {sequelize} = require('./server/db')
const {Item} = require('./server/models/item')
import 'babel-polyfill'

describe(`Item model`, () => {

    test(`can create a item`, async () => {
        const newItem = await Item.create({title: 'Shoes', description: 'cool shoes', price: 12, category: 'sneakers', image: 'randomurl'})
        expect(newItem.title).toEqual('Shoes')
    })
})

