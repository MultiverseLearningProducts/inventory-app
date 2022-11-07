const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET single /item
router.get('/:id', (req, res) => {
  const itemParams = await Item.findByPk(request.params.id);
  res.json(itemParams)
});

module.exports = router;
