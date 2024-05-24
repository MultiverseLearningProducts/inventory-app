import React from "react";
import BookDetailsNavBar from "./BookDetailsNavBar"
import axios from 'axios'
import { useState, useEffect } from 'react'
import apiURL from '../api'
import { Link } from 'react-router-dom'
import { useParams, Link } from "react-router-dom";

function EditBookForm() {
    const { id } = useParams();
    const [book, setBook] = useState({})
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('') 
    const [quantity, setQuantity] = useState('') 
    const [imageUrl, setImageUrl] = useState('')

    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault() //stop the page from auto refreshing
        const requestBody = {
            title,
            author,
            price,
            description,
            genre,
            quantity,
            imageUrl
        }
        //check to see if there are any empty fields
        const isEmptyCheck = Object.values(requestBody).some((property) => (property === ''))
        setSubmitted(true)
        try {
           //check to make sure no field is empty
           if(!isEmptyCheck) {
            await axios.put(`${apiURL}/books/${id}`, requestBody)
            setMessage("Book has been updated successfully")
           } else {
            setMessage("Error updating book, Try again!")
           }
        } catch (error) {
            setMessage("Error updating book, Try again!")
            console.error(error)
        }
    }

    function BookDetails() {
        const { id } = useParams();

        useEffect(() => {
          const getBook = async () => {
            try {
              const result = await axios.get(`${apiURL}/books/${id}`)
              const bookDetails = result.data
                setBook(bookDetails)
                setTitle(bookDetails.title)
                setPrice(bookDetails.price)
                setAuthor(bookDetails.author)
                setDescription(bookDetails.description)
                setGenre(bookDetails.genre)
                setQuantity(bookDetails.quantity)
                
                
                
            } catch (error) {
              console.error("Could not get book", error);
            }
            
          }
          getBook()
          
        }, [id])
    }
    BookDetails()

    return(
        <>
            <BookDetailsNavBar />
            <h1>Create book form</h1>
            <h3>{(submitted) ? message : ""}</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(event) =>{
                            setTitle(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Author:
                    <input
                        type="text"
                        value={author}
                        onChange={(event) =>{
                            setAuthor(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(event) =>{
                            setDescription(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(event) =>{
                            setPrice(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Genre:
                    <input
                        type="text"
                        value={genre}
                        onChange={(event) =>{
                            setGenre(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(event) =>{
                            setQuantity(event.target.value)
                        }}
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="url"
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)}
                        required
                    />
                </label>
                
                <button type="submit">Save</button>
                <Link to='/'><button>Go back to main</button></Link>
                
                    
                
                
            </form>
        </>
    )
}

export default EditBookForm