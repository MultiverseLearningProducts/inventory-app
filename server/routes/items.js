const express = require("express");
const { check, validationResult } = require('express-validator')
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
router.post('/',[
  check('title').trim().notEmpty(),
  check('price').trim().notEmpty(),
  check('description').trim().notEmpty(),
  check('category').trim().notEmpty(),
  check('image').trim().notEmpty()], async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    res.json({error:errors.array()})
}else{
  try{
    await Item.create(req.body)
     let allItems= await Item.findAll()
   res.json(allItems)
 }catch (error) {
   next(error);
 }
}
	
})
router.delete('/:id', async (req, res) => {
	try{
  await Item.destroy({where: {id : req.params.id}})
	res.send("deleted!!")
  }catch (error) {
    next(error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    await Item.update(req.body, {
      where: { id: req.params.id },
    });
    let allItems = await Item.findAll();
    res.json(allItems);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
