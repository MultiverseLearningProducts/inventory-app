const express = require("express");
const router = express.Router();
const { Items } = require("../models");

// GET all items

router.get("/", async (req, res, next) => {
  try {
    const items = await Items.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const items = await Items.findByPk(req.params.id);
    res.json(items);
  } catch (error) {
    next(error);
  }
});


router.post("/", async (req, res, next) => {
  try {
    const item = await Items.create(req.body);
    res.json(item);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
