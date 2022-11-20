const express = require("express");
const router = express.Router();
const itemsRouter = require('./items')

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
// different model routers
router.use('/sauces', require('./sauces'));
router.use('/items', itemsRouter);
module.exports = router;