const express = require("express");
const Router = express.Router();
const { Book } = require("../models/index");
const {getBooks} = require("../controllers/bookController");

Router.get("/", getBooks);

module.exports = Router;
