const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /api/items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET /api/items:id
router.get("/:id", async (req, res, next) => {
  // console.log(req.params.id);
  try {
    const item = await Item.findByPk(req.params.id);
    if(item){
    res.send(item);
    } else {
      res.status(404).send({error: "Not Found"});
    }
  } catch (error) {
    next(error);
  }
});

//PUT /api/items:id


//Delete request /api/items/:id
router.delete("/:id", async (req, res, next) => {
  // console.log(req.params.id);
  try {
    const item = await Item.findByPk(req.params.id);
    if(item){
      await item.destroy();
    res.status(204).send();
    } else {
      res.status(404).send({error: "Not Found"});
    }
  } catch (error) {
    next(error);
  }
});



module.exports = router;


// added this file here copying sauces exactly for back end something