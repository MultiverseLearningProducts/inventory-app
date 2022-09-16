const express = require("express");
const router = express.Router();
const { Item } = require("../models");

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);
    res.json(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
