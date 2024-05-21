const express = require("express");
const Router = express.Router();
const { Book } = require("../models/index");
const {getBooks, getOneBook, addBook} = require("../controllers/bookController");


// GET all books
Router.get("/", getBooks);

// GET one book
Router.get("/:bookId", getOneBook);

// POST - add a book
Router.post("/", addBook);

module.exports = Router;
