import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [addItem, setAddItem] = useState(false)
	
	const [singleView, setSingleView] = useState(false)
	const [singleItemId, setSingleItemId] = useState(0)
	// create forms 
	// create usestates for all the properties from database
	// title, price, description, category, image
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState('')
	const [description, setDescription] = useState('')
	const [category, setCategory] = useState('')
	const [image, setImage] = useState('')

// create handleClicks
	// create handleclick to add a page that will display a form
	const addClickHandler = () =>{
		setAddItem(!addItem)
	}

	// create submit form to send information in order to add an Item
	const handleSubmit = async (e) =>{
		e.preventDefault()
		const res = await fetch(`${apiURL}/items`, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: title,
			price: price,
			description: description,
			category: category,
			image: image
		
		})
	})
	const data = await res.json()
	console.log(data)
	setTitle('')
	setPrice('')
	setDescription('')
	setCategory('')
	setImage('')
	fetchItems()
	setAddItem(false)
		
	}

	//all items
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			console.log(fetchItems)
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	
	
	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
      <h1>DDHM APPAREL </h1>
			
			{addItem ?
			(<div>
				<form onSubmit={handleSubmit}>
					<input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' value={title}/>
					<input onChange={(e) => setPrice(e.target.value)} type="number" placeholder='Price' value={price}/>
					<input onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Description' value={description}/>
					<input onChange={(e) => setCategory(e.target.value)} type="text" placeholder='Category' value={category}/>
					<input onChange={(e) => setImage(e.target.value)} type="text" placeholder='Image LInk' value={image}/>
					<button className="button1" type="submit">Create your new Item</button>
				</form>
				
			</div>)
			:
			(<div className='container'>
				<h2 >All things 🔥</h2>
				<button onClick={addClickHandler}>Add a new Item</button>
			<ItemsList items={items} setItems={setItems}singleItemId={singleItemId} singleView={singleView} 
			setSingleItemId={setSingleItemId} setSingleView={setSingleView} setTitle={setTitle} setDescription= {setDescription} setPrice={setPrice} setCategory={setCategory} setImage={setImage} title={title} description={description} price={price} category={category} image={image}/>
			</div>)
}
		</main>
	)
}