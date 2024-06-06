import React, { useEffect, useState } from "react";
import Form from "./Form";
import ItemsList from "./ItemsList";
import UpdateItemForm from "./UpdateItemForm";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
	const [items, setItems] = useState([]);
	const [currentItem, setCurrentItem] = useState(null);

	const [isCreateFormShowing, setIsCreateFormShowing] = useState(false);
	const [isUpdateFormShowing, setIsUpdateFormShowing] = useState(false);

	async function addItem(data) {
		// Send the POST request to the back end
		const response = await fetch(`${apiURL}/items`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		// If the POST request was successful...
		if (response.ok) {
			// Add the new item to state
			const newItem = await response.json();
			setItems([...items, newItem]);

			// Hide the form
			setIsCreateFormShowing(false);
		}
	}

	async function updateItem(id, data) {
		// Send the PATCH request to the back end
		const response = await fetch(`${apiURL}/items/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		// If the PATCH request was successful...
		if (response.ok) {
			const updatedItem = await response.json();

			const index = items.findIndex(item => {
				if (item.id === id) {
					return true;
				} else {
					return false;
				}
			});

			// Replace the old item with the updated item
			const updatedItems = items.toSpliced(index, 1, updatedItem);
			setItems(updatedItems);
			setCurrentItem(updatedItem);

			// Hide the form
			setIsUpdateFormShowing(false);
		}
	}

	async function deleteItem(id) {
		// Send the DELETE request to the back end
		const response = await fetch(`${apiURL}/items/${id}`, {
			method: "DELETE",
		});

		// If the DELETE request was successful...
		if (response.ok) {
			const filteredItems = items.filter(item => {
				if (item.id === id) {
					return false;
				} else {
					return true;
				}
			});

			// Remove the deleted item from state
			setItems(filteredItems);

			// Return to the home page
			setCurrentItem(null);
		}
	}

	function confirmDelete(id) {
		// Returns true if the user presses OK, otherwise false
		const confirmed = window.confirm("Are you sure you want to delete this item?");

		if (confirmed) {
			deleteItem(id);
		}
	}

	useEffect(() => {
		async function fetchItems() {
			try {
				const response = await fetch(`${apiURL}/items`);
				const itemsData = await response.json();
				setItems(itemsData);
			} catch (err) {
				console.log("Oh no an error!", err);
			}
		}

		fetchItems();
	}, []);

	// If there is no current item, show all items
	if (!currentItem) {
		return (
			<main>
				<h1>Inventory App</h1>
				
				<ItemsList items={items} setCurrentItem={setCurrentItem} />
				<br></br>
				<br></br>
				<br></br>

				<div class="additembutton">
				<button onClick={() => setIsCreateFormShowing(!isCreateFormShowing)}>
					{isCreateFormShowing ? "Hide Form" : "Add New Item"}
				</button>
				
				{isCreateFormShowing && <Form addItem={addItem} />}
				</div>
			</main>
		);
	}

	// Otherwise, show the single item view
	return (
		<main>
			
			<h1>{currentItem.name}</h1>
			<div className="item-details">
  				<div className="left">
    			<img src={currentItem.image} alt="" />
  				</div>
  				<div className="right">
				<p><b>Description:</b> <p></p>{currentItem.description}</p>
    			<p><b>Price:</b> <p></p>£{currentItem.price.toFixed(2)}</p>
    			
  				</div>
			</div>
			<p></p>
			<br></br>
			<div class="singleitembuttons2">
			
				<button onClick={() => setCurrentItem(null)}>All Items</button>
			
				<button onClick={() => confirmDelete(currentItem.id)}>Delete Item</button>
			</div>
			<br></br>
			<div class="singleitembuttons">
			<button onClick={() => setIsUpdateFormShowing(!isUpdateFormShowing)}>
				{isUpdateFormShowing ? "Hide Form" : "Update Form"}
				</button>
				{isUpdateFormShowing && <UpdateItemForm {...currentItem} updateItem={updateItem} />}
			</div>
		</main>
	);
};




// import React, { useState, useEffect } from 'react';
// import { SaucesList } from './SaucesList';
// import { ItemsList } from './ItemsList';
// import { Form } from './Form';
// import { Page } from './Page';

// // import and prepend the api url to any fetch calls
// import apiURL from '../api';


// export const App = () => {

// 	const [items, setItems] = useState([]);
// //this should display all the items
// 	const [activeItem, setActiveItem] = useState(null)
// //this should allow selecting one item and displaying that items page
// 	const [isAddingItem, setIsAddingItem] = useState(false)
// //this should allow adding page

// const [isEditFormShowing, setIsEditFormShowing] = useState(false)

// // async function getItem(id) {
// // 	const response = await fetch(`${apiURL}/items/${id}`)
// // 	const itemData = await response.json()
// // 	setActiveItem(itemData)
// // }

// // async function addItem(item) {
// //     const response = await fetch(`${apiURL}/items`, {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify(item)
// //     })

// // 	const newItem = await response.json()
// //     setItems([...items, newItem])
// //     setIsAddingItem(false)
// // }

// // async function deletePage(id) {
// //     await fetch(`${apiURL}/items/${id}`, {
// //       method: 'DELETE'
// //     })

// //     setItems(items.filter(item => item.id !== id))
// //     if (activeItem && activeItem.id === id) {
// //       setActiveItem(null)
// //     }
// //   }

// async function deleteItem(id) {
// 	await fetch(`${apiURL}/items/${id}`, {
// 		method: "DELETE",
// 	});

// 	const filteredItems = items.filter(item => {
// 		if (item.id === id) {return false;
// 	} else {
// 		return true;
// 	}});

// 	setItems(filteredItems);
// 	setActiveItem(null);
// }

// function confirmDelete(id) {
// 	const confirmed = window.confirm("Are you sure you want to remove and delete this item?");
// 	if (confirmed) {
// 		deleteItem(id);
// 	}
// }



// async function addItem(item) {
// 	// Event.preventDefault();
// 	    const response = await fetch(`${apiURL}/items`, {
// 	      method: 'POST',
// 	      headers: {
// 	        'Content-Type': 'application/json'
// 	      },
// 	      body: JSON.stringify(item)
// 	    })
// 		if (!response.ok) {
// 			// const newItem = await response.json();
// 			// setItems([newItem, ...items]);
// 			// setName("");
// 			// setDescription("");
// 			// setPrice("");
// 			// setCatagory("");
// 			// setImage("");
// 			// If response is not OK, throw an error with the status text
// 			throw new Error(`Failed to add item: ${response.statusText}`);
// 		  }
		
// 		  // Ensure we wait for the response to be parsed as JSON
// 		  const data = await response.json();
		
// 		  // Return the parsed data or a success message
// 		  return data;
// 		}
// //review this commented above as this adds items



		
// useEffect(() => {
// 	async function fetchItems(){
// 		try {
// 			const response = await fetch(`${apiURL}/items`);
// 			const itemsData = await response.json();
			
// 			setItems(itemsData);
// 		} catch (err) {
// 			console.log("Oh no an error! ", err)
// 		}
// 	}
// 		fetchItems();
// 	}, []);

// 	useEffect(() => {
// 		if (activeItem) {
// 			document.name = `${activeItem.name} - Inventory App`
// 		} else if (isAddingItem) {
// 			document.name = `Add an Item - Inventory App`
// 		} else {
// 			document.name = `Inventory App`
// 		}
// 	}, [activeItem, isAddingItem])

// 	if (isAddingItem) {
// 		return <Form addItem={addItem} setIsAddingItem={setIsAddingItem} />
// 	  } // review this for add item 
	
// 	  if (activeItem) {
// 		return (
// 			<main>
// 				<h4>{activeItem.name}</h4>
// 				<p>{activeItem.price.toFixed(2)}</p>
// 				<p>{activeItem.description}</p>
// 				<img src={activeItem.image} alt="" />
// 				<p><button onClick={() => setActiveItem(null)}>All Items</button></p>
// 				<p><button onClick={() => confirmDelete(activeItem.id)}>Delete Item</button></p>
// 			</main>
// 		)
// 		// return <Page {...activeItem} setActiveItem={setActiveItem} />
// 	  }
// {/* check this code as kieran worked on this in a workshop */}

	

// 	return (
// 		<main>	
//       <h1>Items Store</h1>
// 			<h2>We Sell Everything</h2>

// 		<ul className="inventory">
// 			{items.map(item => (
// 				<li key={item.id}>
// 					<div>
// 					<h4>
// 						<button onClick={() => setActiveItem(item)}>{item.name}</button>
// 					</h4>
// 					<img src={item.image} alt=""/>
// 					</div>
// 				</li>
// 			))}
// 		</ul>
// 					{/* <button class="mainbutton"
// 					className="link"
// 					type="button"
// 					onClick={() => getItem(item.id)}
// 					>
// 					{item.name}	
// 					</button>
// 					<h3><img src={item.image} class="image" alt="" /></h3>
// 				</li>
// 			))}
// 		</ul> */}
// 		{/* this above puts the items onto the screen */}

// 		{/* return (     
// 		<div><h1>Items List</h1><ul>        
// 			{items.map((item) => (          
// 			<li key={item.id} onClick={() => handleItemClick(item)}>             
// 			{item.name}          
// 			</li>        
// 			))}       
// 			</ul> {selectedItem && <Item item={selectedItem} />} </div>  ); }; export default App; */}
  
// 			<ItemsList items={items} />
// 			<button
//           className="link"
//           type="button"
//           onClick={() => setIsAddingItem(true)}
//         >
//           Add a Page &rarr;
//         </button>
// 		</main>
// 	)
// }

// //add item button





// // We need to edit this bit as this is a delete button but currently edited for wikiverse
// // return (
// //     <main>
// //       <h1 style={{ marginBottom: 0 }}>WikiVerse</h1>
// //       <p style={{ marginTop: 0 }}>An interesting 📚</p>
// //       <ul>
// //         {pages.map((page) => (
// //           <li key={page.id}>
// //             <button
// //               className="link"
// //               type="button"
// //               onClick={() => getPage(page.slug)}
// //             >
// //               {page.title}
// //             </button>
// //             <button
// //               className="link"
// //               type="button"
// //               onClick={() => deletePage(page.id)}
// //               style={{ marginLeft: '10px', color: 'red' }}
// //             >
// //               Delete
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //       <p>
// //         <button
// //           className="link"
// //           type="button"
// //           onClick={() => setIsAddingPage(true)}
// //         >
// //           Add a Page &rarr;
// //         </button>
// //       </p>
// //     </main>
// //   )
// // }