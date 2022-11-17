import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import {Form} from './Form'
import {apiurl} from '../api'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	const [itemsForm, setItemsForm] = useState([]);
    const [newForm, setNewForm] = useState({
		title: "",
        price: "",
        description: "",
        category: "",
        image: ""
	})

	const [items, setItems] = useState([]);
	async function fetchItems() {
		await fetch(`${apiURL}/items`, {
			"method" : "GET"
        })
        .then((res) => res.json())
        .then((res) => setItems(res))
        .catch(console.error);
	}
	
	useEffect(() => {
		fetchItems()
    }, [])

	return (
		<main>	
      <h1> Store</h1>
	  <Form itemsForm={itemsForm} setItemsForm={setItemsForm} newForm={newForm} setNewForm={setNewForm} items={items}/>
			<h2>All things 🔥</h2>
			<ItemsList items={items} />
		</main>
	)
}