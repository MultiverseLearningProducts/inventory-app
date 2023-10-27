import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [item, setItem] = useState({})

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchItem(){
		try {
			const response = await fetch('${apiURL}/items/:id');
			const itemData = await response.json();
			setItem(itemData);
		} catch(err) {
			console.log('Item not found.', err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
      <h1>CADS-DRY INC & Sons Store</h1>
			{!item
			?
			<>
			<h2>All things 🔥!</h2>
			<ItemsList items={items} />
			</>
			:
			<>
			<h2>🔥!</h2>
			<button onClick={()=>setItem({})}>Back</button>
			<img src={item.image}/>
			<p>{item.name}</p>
			<p>{item.price}</p>
			<p>{item.description}</p>
			</>
			}
		</main>
	)
}