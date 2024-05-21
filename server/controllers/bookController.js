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
}

module.exports = {
    getBooks,
    getOneBook
}


// Add next to GetOneBook