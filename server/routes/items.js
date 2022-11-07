const express = require("express");
const router = express.Router();
const { Item } = require("../models/item");

router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newItem = req.body;
    await Item.create(newItem);
    const findAll = await Item.findAll();
    res.json(findAll);
  } catch (error) {
    console.log(error);
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    await Item.destroy({
      where: {
        id: req.params.id
      }
    });
    const Items =  await Item.findAll();
    res.send(Items);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateItem = await Item.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    const findItem = await Item.findByPk(req.params.id)
    res.send(findItem)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
