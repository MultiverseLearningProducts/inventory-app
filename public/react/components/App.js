import React, { useState, useEffect } from 'react';
import {ItemSingle} from './ItemSingle';
import { ItemsList } from './ItemsList';
import {Login} from './login'


// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { ItemAdd } from './ItemAdd';

export const App = () => {

	const [items, setItems] = useState([]);
	const [selectedItem, setSelectedItem] = useState(null);
	const [isAddingItem, setIsAddingItem] = useState(false);

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
			
      <h1>Phones Store</h1>
			<h2>With Discount</h2>	
		  
			<button className={isAddingItem ? 'btn-danger' : ''} onClick={() => setIsAddingItem(!isAddingItem)}>{isAddingItem ? 'Cancel' : 'Add Item'}</button>
			{ isAddingItem && <ItemAdd setIsAddingItem={setIsAddingItem} fetchItems={fetchItems} /> }
			{
				selectedItem
					? <ItemSingle item={selectedItem} setSelectedItem={setSelectedItem} fetchItems={fetchItems}/>
					: <ItemsList items={items} setSelectedItem={setSelectedItem} />
			}
			
		</main>
		
		

	)
		
	
		
}