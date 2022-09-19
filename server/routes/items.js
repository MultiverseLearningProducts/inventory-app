const express = require("express");
const router = express.Router();
const { Item } = require("../models/");

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
    const additem = await Item.create(req.body);
    res.json(items);
  } catch (error) {
    next(error);
  }
})

module.exports = router;