import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { AddForm } from './AddForm';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	const [items, setItems] = useState([]);
	const [isAddingItem, setIsAddingItem] = useState(false);

	async function fetchItems() {
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();

			setItems(itemsData);
		} catch (err) {
			console.log('Oh no an error! ', err);
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>
			{isAddingItem && <AddForm />}
			{!isAddingItem && (
				<>
					<h1>Item Store</h1>
					<button onClick={() => setIsAddingItem(!isAddingItem)}>
						Add Item
					</button>
					<h2>All things 🔥</h2>
					<ItemsList items={items} setItems={setItems} />
				</>
			)}
		</main>
	);
};
