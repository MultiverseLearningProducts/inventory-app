import React, { useState, useEffect } from 'react';
import { SaucesList} from './SaucesList';
import { ItemsList} from './ItemsList';
import { SingleViewItem } from './SingleViewItem';

import { AddItem} from './AddItem';


// import and prepend the api url to any fetch calls
//
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);
	const [singleViewItem, setSingleViewItem] = useState(null);

	const [isAddingItem, setIsAddingItem] = useState(false);


	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			
			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchSingleItem(id){
		try {
		  const response = await fetch(`${apiURL}/items/${id}`);
		  const item = await response.json();
		  setSingleViewItem(item);
		} catch (err) {
		  console.log("Oh no an error! ", err);
		}
	  }

	// useEffect(() => {
	// 	fetchSauces();
	// }, []);

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
	  <h1>Inventory App</h1>
	  {singleViewItem ? (
		<SingleViewItem props={singleViewItem} setSingleViewItem={setSingleViewItem} />
	  ) : isAddingItem ? (
		<AddItem setIsAddingItem={setIsAddingItem}/>
	  ) : (
			<div><ItemsList items={items} handleClick={fetchSingleItem} setIsAddingItem={setIsAddingItem}/></div>
	  )}
		</main>
	)
}