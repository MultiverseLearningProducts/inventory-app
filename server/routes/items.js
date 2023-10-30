const {Router} = require('express');
const { Item } = require("../models");

const itemRouter = Router();

// GET /item
itemRouter.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// GET item/:id
itemRouter.get("/:id", async (req, res, next) => {
  try {
      const found = await Item.findByPk(req.params.id);
      res.json(found)
  } catch (err) {
      next(err)
  }
})

// POST new Item
itemRouter.post("/", async (req, res, next) => {
  try {
    await Item.create(req.body)
    const all = await Item.findAll()
    res.json(all)
  } catch (err){
    next(err)
  }
})

// PUT update Item
itemRouter.put("/:id", async (req,res,next) => {
  try{
    await Item.update(req.body, {where:{id:req.params.id}})
    const find = await Item.findByPk(req.params.id)
    res.json(find)
  } catch (err){
    next(err)
  }
})

// DELETE Item by ID
itemRouter.delete("/:id", async(req, res, next) => {
  try{
    await Item.destroy({where:{id:req.params.id}})
    const find = await Item.findAll()
    res.json(find)
  } catch (err){
    next(err)
  }
})


module.exports = itemRouter;