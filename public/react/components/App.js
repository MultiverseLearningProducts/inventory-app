import React, { useState, useEffect } from 'react';
import { itemsList } from './itemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

function App () {

	const [items, setitems] = useState([]);

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
		<div>	
      <h1>Inventory List</h1>
			<h2>View All 🔥</h2>
			{items.map((items) => (
				<p key={items.id}>{items.title}</p>
			))}
			
		</div>
	);

}

export default App;