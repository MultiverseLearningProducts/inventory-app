const express = require("express");
const router = express.Router();
const { Item } = require("../models");
const { sequelize } = require("../db");
const { items } = require("../seedData")

// GET /item
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
