import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [isSinglePageView, setSinglePageView] = useState(false);
	const [itemObject, setItemObject] = useState(null)
	
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
      <h1>The FUN Store</h1>
			<h2>All things 🔥</h2>
			<ItemsList items={items} isSinglePageView={isSinglePageView} setSinglePageView={setSinglePageView} fetchItems={fetchItems} itemObject = {itemObject} setItemObject = {setItemObject}/>
		</main>
	)
}

// id [setID] and pass it down to the fetch items
//set signle page = true
// if signle page view is true than run fiter else run map