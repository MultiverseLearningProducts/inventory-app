import React, { useState, useEffect } from "react";
import apiURL from "../api";
import axios from "axios";
import BookCard from "./BookCards";
import { Link } from "react-router-dom"
import BooksNavBar from "./BooksNavBar";

// GET all books
function Books() {
  const [books, setBooks] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      try {
        const result = await axios.get(`${apiURL}/books`)
        const books = result.data
        setBooks(books)
        setFilteredBooks (result.data)
      } catch (error) {
        console.error("Could not get books:", error);
      }
    }
    getBooks()
  }, [])

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterBooks(event.target.value);
  };

    // Function to filter books based on search query
    const filterBooks = (query) => {
      if (!query) {
        setFilteredBooks(books);
      } else {
        const filtered = books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBooks(filtered);
      }
    };
  
  return (
    <>
      <BooksNavBar />
    <div className="books-container">
      <h1>Books</h1>
      <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
          />
        </div>

      <Link to="/new-book">
          <button>Add a Book</button>
      </Link>
      {filteredBooks.map((book, idx) => {
        return <BookCard key={idx} bookInfo={book} />
      })}
    </div>
    </>
  )
} 

export default Books