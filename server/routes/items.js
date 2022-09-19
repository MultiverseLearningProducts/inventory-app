const express = require("express");
const router = express.Router();

const { Item } = require("../models");

//Express Route to GET all items
router.get("/", async (req, res, next) => {
    try {
      const items = await Item.findAll();
      res.send(items);
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;

const { Item } = require("../models/");

router.use(express.json());
router.use(express.urlencoded({ extended:true}));

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// POST / items

router.post("/", async (req, res, next) => {
  try {
    const addItem = await Item.create(req.body); 
    res.json(await Item.findAll());
  } catch (error) {
    next(error);
  }
})

module.exports = router;

