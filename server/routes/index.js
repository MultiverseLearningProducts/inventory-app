const express = require("express");
const router = express.Router();
const{check, validationResult} = require("express-validator"); 

// different model routers
router.use('/items', require('./items'));

module.exports = router;
