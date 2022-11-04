const express = require("express");
const router = express.Router();

// different model routers

//starter code below
//router.use('/sauces', require('./sauces'));

router.use('/items', require('./items'));

module.exports = router;
