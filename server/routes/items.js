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

router.get("/:id", async (req, res, next) => {
  try {
    const items = await Items.findByPk(req.params.id);
    res.send(items);
  } catch (error) {
    next(error);
  }
});


router.post("/", async (req, res, next) => {
  try {
    const item = await Items.create(req.body);
    res.send(item);
  } catch (error) {
    next(error);
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const [updatedRowCount, updatedItems] = await Items.update(req.body, {
      where : {id : req.params.id},
      return: true
    });
    res.send(updatedItems[0]);
  } catch (error) {
    next(error);
  } 
})

router.delete("/:id", async (req, res, next) => {
  try {
    await Items.destroy({
      where : {id : req.params.id}
    });
    const item = await Items.findAll()
    res.send(item);
  } catch (error) {
    next(error);
  } 
})

module.exports = router;
