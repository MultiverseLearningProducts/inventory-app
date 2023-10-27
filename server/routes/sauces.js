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

module.exports = sauceRouter;
