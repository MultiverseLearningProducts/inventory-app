const request = require('supertest');
const express = require('express');
const router = require('../routes/items'); 
const app = express();

app.use(express.json());
app.use('/api/items', router);

// Alex - create tests for items (npm run test, in terminal to run tests)
describe('Item API', () => {
    it('should GET all items', async () => {
      const res = await request(app)
        .get('/api/items')
        .expect(200);
      expect(Array.isArray(res.body)).toBeTruthy();
    });
  
    it('should GET an item by id', async () => {
      const res = await request(app)
        .get('/api/items/2') // Alex - change the id to match an item in your database
        .expect(200);
      expect(typeof res.body).toBe('object');
    });
  
    it('should POST a new item', async () => {
      const res = await request(app)
        .post('/api/items')
        .send({ name: 'test item', description: 'test description' })  // Alex - change the name and description to match an item in your database
        .expect(200);
      expect(res.body.name).toEqual('test item');
    });

    describe('DELETE /api/items/:id', () => {
      it('should respond with status code 204 when item is successfully deleted', async () => {
        const itemId = 48; // replace with an id of an existing item
        const response = await request(app).delete(`/api/items/${itemId}`);
        expect(response.statusCode).toBe(204);
      });
    
      it('should respond with status code 500 when item does not exist', async () => {
        const itemId = 9999; // replace with an id of a non-existing item
        const response = await request(app).delete(`/api/items/${itemId}`);
        expect(response.statusCode).toBe(500);
      });
    });
  
  });