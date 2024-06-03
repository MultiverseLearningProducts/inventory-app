const express = require("express");
const router = express.Router();

// different model routers
router.use('/sauces', require('./sauces'));
router.use('/items', require('./items'));  // copied from sauces line above which was already in the code

module.exports = router;
