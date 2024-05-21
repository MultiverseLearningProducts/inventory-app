const { Book } = require("../models/index");

// GET all books
const getBooks = async (req, res) => {
    try {
        const books = await Book.findAll()
        if(books) {
            res.status(200).json(books)
        }
    } catch (error) {
        res.status(500).send(error)
    }
};

// GET one book
const getOneBook = async (req, res) => {
    try{
        const bookId = req.params.bookId;
        const book = await Book.findByPk(bookId);
        if(!book){
            res.status(404).send("Book not found")
        } else {
            res.status(200).json(book)
        };
    } catch (error){
        res.status(500).send(error)
    }
};

// POST - add a book
const addBook = async (req, res) => {
    try {
        //new book information
        const bookInfo = req.body
        //create the book
        await Book.create(bookInfo)
        //check to see if the new apprentice was created
        const newBook = await Book.findOne({ where: { title: bookInfo.title }})
        if(!newBook) {
            res.status(400).send("Something went wrong, try again!")
        } else {
            res.status(201).send("New book created!")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

module.exports = {
    getBooks,
    getOneBook,
    addBook
}


// Add next to GetOneBook