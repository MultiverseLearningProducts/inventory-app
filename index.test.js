const { sequelize } = require("./server/db");
const {Item} = require('./server/models/index')
//import React from 'react';
//import { render, fireEvent } from '@testing-library/react';

import 'regenerator-runtime/runtime';

describe('Testing', () => {
    beforeAll(async () => {
        
        await sequelize.sync({ force: true });
    })
    test('Testing find all', async () => {
        //Testing find all
        const creatItems = await Item.create({
            title:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            price:109.95,
            description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category:"men's clothing",
            image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"


        },
        )
        const foundAllItems = await Item.findAll();
        expect(foundAllItems[0].title).toEqual("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
        expect(foundAllItems[0].price).toEqual(109.95)
        expect(foundAllItems[0].description).toEqual("Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday")
        expect(foundAllItems[0].category).toEqual("men's clothing")
        expect(foundAllItems[0].image).toEqual("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")
        
    })
    test('Testing by item', async () => {
        //Testing find by items
        const creatItemsByid = await Item.create({
            
            title:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            price:109.95,
            description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category:"men's clothing",
            image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"


        },
       
    )
        const foundOnlyItem= await Item.findByPk(1);
        expect(foundOnlyItem.price).toEqual(109.95);
    })

})