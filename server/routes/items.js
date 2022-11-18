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


router.get("/:id", async(req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.json(item)
  }catch(error) {
    next(error)
  }
});

router.post("/", async(req, res, next) => {
  try{
    const addItem = await Item.create(req.body);
    res.json(addItem)
  }catch(error) {
    next(error)
  }
});


module.exports = router;
