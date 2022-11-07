const express = require("express");
const router = express.Router();

// different model routers

router.use('/items', require('./ItemRoutes'))

module.exports = router;
