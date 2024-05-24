import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import apiURL from "../api";
import axios from "axios";
import BookDetailCard from "./BookDetailCard";
import BookDetailsNavBar from "./BookDetailsNavBar";

// GET one books details
function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState({})
    useEffect(() => {
      const getBook = async () => {
        try {
          const result = await axios.get(`${apiURL}/books/${id}`)
          const bookDetails = result.data
            setBook(bookDetails)
            console.log(setBook)
        } catch (error) {
          console.error("Could not get book", error);
        }
      }
      getBook()
    }, [id])
  
    return (
        <>
            <BookDetailsNavBar />
        <div className="books-container">
        <h1>Book Details</h1>
        <BookDetailCard bookInfo={book} />
      </div>
      </>
    )
  } 
  
  export default BookDetails