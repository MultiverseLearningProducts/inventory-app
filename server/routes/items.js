const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /sauce
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
    const { id } = req.params;
    const item = await Item.findByPk(id);
    res.json(item);
  } catch (error) {
    next(error);
  }
});
router.post('/', async (req, res) => {
	try{
     await Item.create(req.body)
      let allItems= await Item.findAll()
	  res.json(allItems)
  }catch (error) {
    next(error);
  }
})
router.delete('/:id', async (req, res) => {
	try{
  await Item.destroy({where: {id : req.params.id}})
	res.send("deleted!!")
  }catch (error) {
    next(error);
  }
})
module.exports = router;
