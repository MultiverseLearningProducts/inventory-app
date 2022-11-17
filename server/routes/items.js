const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /item
// POSTMAN info for Test localhost:3000/api/items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);}
});

module.exports = router;
