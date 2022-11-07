const express = require("express");
const router = express.Router();

// different model routers

router.use('/items', require('./ItemRoutes'))
router.use('/user', require('./UserRoutes'))
router.use('/cart', require('./CartRoutes'))


module.exports = router;
