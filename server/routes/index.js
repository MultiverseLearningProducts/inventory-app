const express = require("express");
const router = express.Router();

// Book routes
router.use('/books', require('./bookRoutes'));

module.exports = router;
