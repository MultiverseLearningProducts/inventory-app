import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemsList';



// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);
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

	useEffect(() => {
		fetchSauces();
		fetchItems();
	}, []);

	return (
		<main>	
      <h1>Sauce Store</h1>

	  <h1>Jared Branch</h1>
	  <h1>Mario Test</h1>
	  <h1>Francis</h1>

			<div>
			<h2>All things 🔥</h2>
			{isAddingItem ? (
          <div>
            <form onSubmit={handleSubmit}>
              <h4>Add an Item</h4>
              <input
                type="text"
                placeholder="Item Title"
                aria-label="item title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <input
                type="text"
                placeholder="Item Price"
                aria-label="item price"
                onChange={(e) => setContent(e.target.value)}
                value={content}
              />
              <input
                type="text"
                placeholder="Item Description"
                aria-label="item description"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="text"
                placeholder="Item Category"
                aria-label="item category"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="text"
                placeholder="Image"
                aria-label="image"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
             	 <button type="submit">Submit Article</button>
			  </form>
			</div>
			) : (
				<ItemsList items = {items} setItems = {setItems}/>
			)}
		
			<SaucesList sauces={sauces} />
			{/* <ItemsList items={items} /> */}

			<button onClick={() => setIsAddingItem(!isAddingItem)}>Add Item</button>

			</div>
		</main>
	)
}
