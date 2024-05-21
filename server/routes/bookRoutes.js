const express = require("express");
const Router = express.Router();
const { Book } = require("../models/index");
const {getBooks, getOneBook} = require("../controllers/bookController");


// GET all books
Router.get("/", getBooks);

// GET one book
Router.get("/:bookId", getOneBook);

module.exports = Router;
