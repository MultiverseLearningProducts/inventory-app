const { application } = require('express');
const Item = require('./item')
const app = require('./app');
const { request } = require('../app');

DESCRIBE('inventory api', () => {
    test('GET item/id', () => {
        return request(app)
        .get('/item/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual({
                title: expect.any(String),
                price: expect.any(Number),
                description: expect.any(String),
                category: expect.any(String),
                image: expect.any(String)
            })
        })
    }
    test('GET item/id -- 404 if not found', () => {
        return request(app).get('/items/12345').expect('404 - Not Found');
    });
    // test('POST item, create item', () => {
    //     return request (app).post('/items').send({
    //     })
    // });
    test('GET item, validate request body', () => {
        return request(app).post('/items').send({})
    });
    test('UPDATE item', () => {});
    test('DELETE item', () => {});
 
})

/*
('Get /item array', () => {
    return request(app)
        .get('/item')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response.body).toEqual(
            expect.arrayContaining([
                title: expect.any(String),
                completed: expect.any(Boolean),
            }),
        ])
    );    
})