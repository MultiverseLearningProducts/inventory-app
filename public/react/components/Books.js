import React, { useState, useEffect } from "react";
import apiURL from "../api";
import axios from "axios";
import BookCard from "./BookCards";

// GET all books
function Books() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    const getBooks = async () => {
      try {
        const result = await axios.get(`${apiURL}/books`)
        const books = result.data
        setBooks(books)
      } catch (error) {
        console.error("Could not get books:", error);
      }
    }
    getBooks()
  }, [])

  return (
  <>
    <div className="books-container">
      <h1>Books</h1>
      {books.map((book, idx) => {
        return <BookCard key={idx} bookInfo={book} />
      })}
    </div>
    </>
  )
} 

export default Books