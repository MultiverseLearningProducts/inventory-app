import axios from 'axios'
import { useState, useEffect } from 'react'

function CreateBookForm() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('') 
    const [quantity, setQuantity] = useState('') 

    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    return(
        <>
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
                <button type="submit">Add New Book</button>
            </form>
        </>
    )
}

export default CreateBookForm