const express = require("express");
const router = express.Router();
const { Item } = require("../models");


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
        const item = await Item.findByPk(req.params.itemId)
    
        if (!item) {
          res.status(404)
          next()
        } else {
          res.send(item)
        }
      } catch (e) {
        next(e)
      }
    })

module.exports = router;