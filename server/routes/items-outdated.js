const express = require("express");
const router = express.Router();
const { Items } = require("../models");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const sauces = await Items.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;