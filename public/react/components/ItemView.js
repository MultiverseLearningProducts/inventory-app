import React, {useState} from 'react';
import apiURL from '../api';

export const ItemView = ({ singleItem, setSingleItem }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const handleClick = async () => {
        const response = await fetch(`${apiURL}/items/${singleItem.id}`, { method: "DELETE" });
        const itemData = await response.json();
        setSingleItem(0);
    }

    async function handleSubmission(event) {
        event.preventDefault();
        const data = { title, description, price, image, category };
        for (let item in data) {
            if (data[item] === "") delete data[item];
        }
        const response = await fetch(`${apiURL}/items/${singleItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        await response.json();
        const res = await fetch(`${apiURL}/items/${singleItem.id}`);
        const itemData = await res.json();
        setSingleItem(itemData);
    }

    return <>
        <h1>{singleItem.title}</h1>
        <h2>{singleItem.price}</h2>
        <img src={singleItem.image} alt={singleItem.title} />
        <h3>{singleItem.description}</h3>
        <h4>{singleItem.category}</h4>
        <button onClick={() => { setSingleItem(0) }}>Back</button>
        <button onClick={handleClick}>Delete</button>
        <h2>Update</h2>
        <form onSubmit={handleSubmission}>
            <input type="text" placeholder='title' value={title} onChange={(ev) => { setTitle(ev.target.value) }} />
            <input type="text" placeholder='description' value={description} onChange={(ev) => { setDescription(ev.target.value) }} />
            <input type="text" placeholder='price' value={price} onChange={(ev) => { setPrice(ev.target.value) }} />
            <input type="text" placeholder='imageUrl' value={image} onChange={(ev) => { setImage(ev.target.value) }} />
            <input type="text" placeholder='category' value={category} onChange={(ev) => { setCategory(ev.target.value) }} />
            <button type="submit">Submit</button>
        </form>
    </>
}


