import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

// export const App = () => {

// 	const [sauces, setSauces] = useState([]);

// 	async function fetchSauces(){
// 		try {
// 			const response = await fetch(`${apiURL}/sauces`);
// 			const saucesData = await response.json();
			
// 			setSauces(saucesData);
// 		} catch (err) {
// 			console.log("Oh no an error! ", err)
// 		}
// 	}

// 	useEffect(() => {
// 		fetchSauces();
// 	}, []);

// 	return (
// 		<main>	
//       <h1>Sauce Store</h1>
// 			<h2>All things 🔥</h2>
// 			<SaucesList sauces={sauces} />
// 		</main>
// 	)
// }

export const App = () => {

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
      <h1>Items Store</h1>
			<h2>We Sell Everything</h2>
			<ItemsList items={items} />
		</main>
	)
}