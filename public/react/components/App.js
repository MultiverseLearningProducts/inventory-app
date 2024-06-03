import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

// export const App = () => {

// 	const [sauces, setSauces] = useState([]);

// 	async function fetchSauces(){
// 		try {
// 			const response = await fetch(`${apiURL}/sauces`);
// 			const saucesData = await response.json();
			
// 			setSauces(saucesData);
// 		} catch (err) {
// 			console.log("Oh no an error! ", err)
// 		}
// 	}

// 	useEffect(() => {
// 		fetchSauces();
// 	}, []);

// 	return (
// 		<main>	
//       <h1>Sauce Store</h1>
// 			<h2>All things 🔥</h2>
// 			<SaucesList sauces={sauces} />
// 		</main>
// 	)
// }

export const App = () => {

	const [items, setItems] = useState([]);

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
      <h1>Items Store</h1>
			<h2>We Sell Everything</h2>
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