import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { ItemView } from './ItemView';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [singleItem, setSingleItem] = useState(0);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			console.log(response);
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
      <h1>Store Warehouse</h1>
			{singleItem ? <ItemView singleItem={singleItem} setSingleItem={setSingleItem}/>:<ItemsList items={items} setSingleItem={setSingleItem}/>}
		</main>
	)
}