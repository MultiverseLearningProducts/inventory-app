const express = require("express");
const router = express.Router();
const { Items } = require("../models");

// GET all items

router.get("/", async (req, res, next) => {
  try {
    const items = await Items.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
