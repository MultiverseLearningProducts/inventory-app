const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");

// get /items returns all item instances
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (e) {
    next(e);
  }
});

router.get("/:itemId", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);

    if (!item) {
      res.status(404);
      next();
    } else {
      res.send(item);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res) => {
  const { name, description, price, category, image } = req.body;

  try {
    const newItem = await Item.create({
      name,
      description,
      price,
      category,
      image,
    });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: "Failed to create item" });
  }
});
//Update route
router.put("/:itemId", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);
    if (!item) return res.status(404).send("Item not found");

    const updatedItem = await item.update(req.body);
    res.send(updatedItem);
  } catch (e) {
    next(e);
  }
});
//Delete route
router.delete("/:itemId", async (req, res, next) => {
  try {
    const deleted = await Item.destroy({ where: { id: req.params.itemId } });
    if (!deleted) return res.status(404).send("Item not found");
    res.status(204).send();
  } catch (e) {
    next(e);
  }
});

// POST route
router.post("/", async (req, res) => {
  const { name, description, price, image, category } = req.body;

  try {
    const newItem = await Item.create({
      name,
      description,
      price,
      image,
      category,
    });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: "Failed to create item" });
  }
});

module.exports = router;
