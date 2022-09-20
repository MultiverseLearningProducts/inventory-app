const express = require("express");
const router = express.Router();

const { Item } = require("../models");

//Express Route to GET all items
router.get("/", async (req, res, next) => {
    try {
      const items = await Item.findAll();
      res.send(items);
    } catch (error) {
      next(error);
    }
  });

router.use(express.json());
router.use(express.urlencoded({ extended:true}));

// GET /items
router.get("/:id", async (req, res, next) => {
  try {
    const items = await Item.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// POST / items

router.post("/", async (req, res, next) => {
  try {
    const addItem = await Item.create(req.body); 
    res.json(await Item.findAll());
  } catch (error) {
    next(error);
  }
})

module.exports = router;

