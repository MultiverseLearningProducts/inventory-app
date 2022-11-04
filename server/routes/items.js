const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET ALL ITEMS
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET SINGLE ITEM
router.get("/:id", async (req, res, next) => {
  try {
    const singleItem = await Item.findByPk(req.params.id);
    res.send(singleItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
