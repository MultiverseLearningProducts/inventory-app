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

router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findOne({
      where: {
        id: req.params.id
      }
    });
    if (item === null) {

    } else {
      res.send(item);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;