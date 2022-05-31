import React, {useState} from "react";
import apiURL from '../api'


export const Form = ({setIsAddingItem}) => {
    const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [category, setCategory] = useState("");

	async function handleSubmission(event) {
		event.preventDefault();
		const data = {title, description, price, image, category};
		const response = await fetch(`${apiURL}/items`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)});
		await response.json();
        setIsAddingItem(false);
    }

    return <>
    	<form onSubmit={handleSubmission}>
			<input type="text" placeholder='title' value={title} onChange={(ev)=>{setTitle(ev.target.value)}}/>
			<input type="text" placeholder='description' value={description} onChange={(ev)=>{setDescription(ev.target.value)}}/>
			<input type="text" placeholder='price' value={price} onChange={(ev)=>{setPrice(ev.target.value)}}/>
			<input type="text" placeholder='imageUrl' value={image} onChange={(ev)=>{setImage(ev.target.value)}}/>
			<input type="text" placeholder='category' value={category} onChange={(ev)=>{setCategory(ev.target.value)}}/>
			<button type="submit">Submit</button>
		</form>
    </>
}  
