# inventory-app
A full-stack application to track your inventory

## Getting Started

1. `npm install`
2. `npm run seed`
3. `npm run server-dev`
4. In a seperate terminal, `npm run client-dev`


## TIER I: MVP Application

- ITEM MODEL

    ✅   Sequelize Model for Item: `/models/index.js`
    ```
    const {Sequelize} = require('sequelize')
    const {sequelize} = require('../db')

    module.exports = {
        db: sequelize,
    };
    ```

   ✅  Item model has Name, Description, Price, Category, Image: `/models/index.js`

    ```
    const Item = sequelize.define("items", {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.NUMBER,
        category: Sequelize.STRING,
        image: Sequelize.STRING,
    });

    module.exports = {
        db: sequelize,
        Item,
    };
    ```
- ITEM ROUTES

    ✅ Express Route to `GET` all Items: `/routes/items.js`
    ```
    // GET /items
        router.get("/", async (req, res, next) => {
        try {
            const items = await Item.findAll();
            res.send(items);
        } catch (error) {
            next(error);
        }
    });
    ```
    ✅ Front-end View for all Items: `/routes/items.js`
    

    ✅ Express Route to `GET` one Item: `/routes/items.js`
    ```
    // GET single /item
    router.get('/:id', async (req, res) => {
    const itemParams = await Item.findByPk(request.params.id);
    res.json(itemParams)
    });
    ```
    - Front-end view for one item (click to see)
