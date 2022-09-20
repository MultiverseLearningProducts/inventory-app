import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { ItemDetails} from './ItemDetails';
import { Form1 } from './Form';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';



// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [isAddingItems, setIsAddingItems] = useState(false);

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
 console.log(items)



	return (
		
		

		<main>	
			{!isAddingItems ?  
			<>
      <h1>Inventory App</h1>
			<h2>Products</h2>
			<ItemList items={items} fetchItems={fetchItems}/>
			<Button variant="primary" onClick={() => setIsAddingItems(true)}>Add new item </Button>
			</>
			:
			<Form1 />}
		</main>
	)
}