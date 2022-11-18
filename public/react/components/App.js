import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	//console.log(items);
	const [itemDetail, setItemDetail] = useState(null);

	//all items
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	//single item
	const handleClickItem= async() => 
	{
		try {
			const response = await fetch(`${apiURL}/items/${id}`);
			const singleItemsData = await response.json();
			console.log(singleItemsData);
			
			setItems(singleItemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
      <h1>Item Store</h1>
			<h2 onClick={handleClickItem}>All things 🔥</h2>
			<ItemsList items={items} />
		</main>
	)
}