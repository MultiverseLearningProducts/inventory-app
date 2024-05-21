const { Book } = require("../models/index");


const getBooks = async (req, res) => {
    try {
        const books = await Book.findAll()
        if(books) {
            res.status(200).json(books)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {getBooks}