import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemsList';
import { Form } from './Form';
import { Page } from './Page';

// import and prepend the api url to any fetch calls
import apiURL from '../api';


export const App = () => {

	const [items, setItems] = useState([]);
//this should display all the items
	const [activeItem, setActiveItem] = useState(null)
//this should allow selecting one item and displaying that items page
	const [isAddingItem, setIsAddingItem] = useState(false)
//this should allow adding page

// async function getItem(id) {
// 	const response = await fetch(`${apiURL}/items/${id}`)
// 	const itemData = await response.json()
// 	setActiveItem(itemData)
// }

// async function addItem(item) {
//     const response = await fetch(`${apiURL}/items`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(item)
//     })

// 	const newItem = await response.json()
//     setItems([...items, newItem])
//     setIsAddingItem(false)
// }

// async function deletePage(id) {
//     await fetch(`${apiURL}/items/${id}`, {
//       method: 'DELETE'
//     })

//     setItems(items.filter(item => item.id !== id))
//     if (activeItem && activeItem.id === id) {
//       setActiveItem(null)
//     }
//   }

async function deleteItem(id) {
	await fetch(`${apiURL}/items/${id}`, {
		method: "DELETE",
	});

	const filteredItems = items.filter(item => {
		if (item.id === id) {return false;
	} else {
		return true;
	}});

	setItems(filteredItems);
	setActiveItem(null);
}

function confirmDelete(id) {
	const confirmed = window.confirm("Are you sure you want to remove and delete this item?");
	if (confirmed) {
		deleteItem(id);
	}
}

// async function addItem(item) {
	//     const response = await fetch(`${apiURL}/items`, {
	//       method: 'POST',
	//       headers: {
	//         'Content-Type': 'application/json'
	//       },
	//       body: JSON.stringify(item)
	//     })
// review this commented above as this adds items



		
useEffect(() => {
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
		fetchItems();
	}, []);

	// useEffect(() => {
	// 	if (activeItem) {
	// 		document.name = `${activeItem.name} - Inventory App`
	// 	} else if (isAddingItem) {
	// 		document.name = `Add an Item - Inventory App`
	// 	} else {
	// 		document.name = `Inventory App`
	// 	}
	// }, [activeItem, isAddingItem])

	// if (isAddingItem) {
	// 	return <Form addItem={addItem} setIsAddingItem={setIsAddingItem} />
	//   }
	
	  if (activeItem) {
		return (
			<main>
				<h4>{activeItem.name}</h4>
				<p>{activeItem.price.toFixed(2)}</p>
				<p>{activeItem.description}</p>
				<img src={activeItem.image} alt="" />
				<p><button onClick={() => setActiveItem(null)}>All Items</button></p>
				<p><button onClick={() => confirmDelete(activeItem.id)}>Delete Item</button></p>
			</main>
		)
		// return <Page {...activeItem} setActiveItem={setActiveItem} />
	  }
{/* check this code as kieran worked on this in a workshop */}

	

	return (
		<main>	
      <h1>Items Store</h1>
			<h2>We Sell Everything</h2>

		<ul>
			{items.map(item => (
				<li key={item.id}>
					<div>
					<h4>
						<button onClick={() => setActiveItem(item)}>{item.name}</button>
					</h4>
					<img src={item.image} alt=""/>
					</div>
				</li>
			))}
		</ul>
					{/* <button class="mainbutton"
					className="link"
					type="button"
					onClick={() => getItem(item.id)}
					>
					{item.name}	
					</button>
					<h3><img src={item.image} class="image" alt="" /></h3>
				</li>
			))}
		</ul> */}
		{/* this above puts the items onto the screen */}

		{/* return (     
		<div><h1>Items List</h1><ul>        
			{items.map((item) => (          
			<li key={item.id} onClick={() => handleItemClick(item)}>             
			{item.name}          
			</li>        
			))}       
			</ul> {selectedItem && <Item item={selectedItem} />} </div>  ); }; export default App; */}

			<ItemsList items={items} />
		</main>
	)
}







// We need to edit this bit as this is a delete button but currently edited for wikiverse
// return (
//     <main>
//       <h1 style={{ marginBottom: 0 }}>WikiVerse</h1>
//       <p style={{ marginTop: 0 }}>An interesting 📚</p>
//       <ul>
//         {pages.map((page) => (
//           <li key={page.id}>
//             <button
//               className="link"
//               type="button"
//               onClick={() => getPage(page.slug)}
//             >
//               {page.title}
//             </button>
//             <button
//               className="link"
//               type="button"
//               onClick={() => deletePage(page.id)}
//               style={{ marginLeft: '10px', color: 'red' }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       <p>
//         <button
//           className="link"
//           type="button"
//           onClick={() => setIsAddingPage(true)}
//         >
//           Add a Page &rarr;
//         </button>
//       </p>
//     </main>
//   )
// }