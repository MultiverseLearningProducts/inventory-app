const express = require("express");
const {check, validationResult} = require('express-validator'); 
const router = express.Router();


const { Item } = require("../models");

// GET ALL ITEMS
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET SINGLE ITEM
router.get("/:id", async (req, res, next) => {
  try {
    const singleItem = await Item.findByPk(req.params.id);
    res.send(singleItem);
  } catch (error) {
    next(error);
  }
});

//ADD SINGLE ITEM
router.post('/' ,[check("title").notEmpty(), check("price").notEmpty(), check("description").notEmpty(), check("category").notEmpty(), check("image").notEmpty()], async (req, res, next) =>{
  const errors = validationResult(req);
    if(!errors.isEmpty()){
        response.json({error: errors.array()});
    }
    else{
        const itemToAdd = await Item.create(req.body);
        res.send(itemToAdd);
    }
})
//DELETE SINGLE ITEM
router.delete('/:id', async (req, res, next) =>{
  try {
    const num = req.params.id;
    const itemToDelete = await Item.destroy({
      where : {id : num}
    });
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
})

//UPDATES SINGLE ITEM
router.put('/:id', [check("title").notEmpty()], async (req, res, next)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    response.json({error: errors.array()});
  }
  else{
    const num = req.params.id;
    const itemToUpdate = await Item.create(req.body, {
      where : {id : num}
    }); 
    res.send(itemToUpdate);
  }

})

module.exports = router;
