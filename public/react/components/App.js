import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { Form } from "./Form";
//import {middleImage} from "https://img.freepik.com/premium-photo/sale-offer-black-friday-shopping-discount-closeup-woman-hand-holding-purchase-bags-isolated-orange-empty-space-background_279525-17960.jpg"
 
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [isSinglePageView, setSinglePageView] = useState(false);
	const [itemObjectTitle, setItemObjectTitle] = useState('');
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
		<>
		<header>The F.U.N Store 
			<nav>
        		<ul>
            	<ul class="menu"><a href="/">Home</a></ul>
            	<ul class="menu"><a href="/">About Us</a></ul>
            	<ul class="menu"><a href="/">Where to Find</a></ul>
            	<ul class="menu"><a href="/">Cart</a></ul>
        		</ul>
    		</nav>
		</header>
		<section id="middle-image"></section>
		<main>	
      <h1>The FUN Store</h1>
			<h2>All things 🔥</h2>
			<ItemsList items={items} isSinglePageView={isSinglePageView} setSinglePageView={setSinglePageView} itemObjectTitle={itemObjectTitle} setItemObjectTitle={setItemObjectTitle}/>
		<Form
			isAddingItem={isAddingItem}
        setIsAddingItem={setIsAddingItem}
        items={items}
        setItems={setItems}
        fetchItems={fetchItems}
				/>
		</main>
		</>
	)
}
