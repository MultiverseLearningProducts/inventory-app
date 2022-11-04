import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { ItemsList } from './ItemsList';

export const App = () => {

	//const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
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
      <h1>Shopping Store</h1>
			<h2>You want it? We got it.</h2>
			<ItemsList items={items} />
		</main>
	)
}