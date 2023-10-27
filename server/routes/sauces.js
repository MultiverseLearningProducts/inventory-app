const {Router} = require('express');
const { Sauce } = require("../models");

const sauceRouter = Router();

// GET /sauce
sauceRouter.get("/", async (req, res, next) => {
  try {
      // might need res.json() for the info to be parsed into JSON
    const sauces = await Sauce.findAll();
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});

// GET sauces/:id
sauceRouter.get('/:id', async (req, res, next) => {
  try {
      const found = await Sauce.findByPk(req.params.id);
      res.json(found)
  } catch (err) {
      next(err)
  }
})

module.exports = sauceRouter;
