import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setitems] = useState([]);
	const [item, setitem] = useState({
		title: '',
		price: 0,
		category: '',
		description: '',
		image: ''
	  })
	  async function addItem(item){
		try {
			await fetch(`${apiURL}/items`,  {
			  	method: 'POST',
			 	headers: {
			   'Content-Type': 'application/json',
			   },
				body: JSON.stringify(item),
		   	});
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	async function fetchitems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setitems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchitems();
	}, []);

	return (
		<main>
			<div className='inventory-header'>

      			<h1>Luxor</h1>
				
			</div>

				{/* <h2>View All Inventory</h2> */}
			
				

				<ItemsList items={items} setitem={setitem} item={item} addItem={addItem}/>

		</main>
	);

}

