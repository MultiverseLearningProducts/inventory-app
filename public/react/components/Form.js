import { React } from 'react';
import apiURL from '../api';

export const Form = ({fetchItems}) => {
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            name: e.target.name.value,
            price: e.target.price.value,
            description: e.target.description.value,
            category: e.target.category.value,
            image: e.target.image.value
        }
        console.log(formData)
        const response = await fetch(`${apiURL}/items`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
            formData
        )
    }) 
    const data = await response.json();
    console.log(data)
    fetchItems()
    e.target.name.value=""
    e.target.price.value=null
    e.target.description.value=""
    e.target.category.value=""
    e.target.image.value=""
}

    return (
        <>
            <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Name'
                name='name'
            />
            <input
                type='number'
                step=".01"
                placeholder='Price'
                name='price'
            />
            <input
                type='text'
                placeholder='Description'
                name='description'
            />
            <input
                type='text'
                placeholder='Category'
                name='category'
            />
            <input
                type='text'
                placeholder='Image'
                name='image'
            />
            <button type='submit'>Submit new item</button>
            </form>
        </>
    )
}