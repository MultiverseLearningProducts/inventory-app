const {Router} = require('express');
const { Item } = require("../models");

const itemRouter = Router();

// GET /item
itemRouter.get("/", async (req, res, next) => {
  try {
    // might need res.json() for the info to be parsed into JSON
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = itemRouter;