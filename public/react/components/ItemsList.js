// import React from 'react';
// import { Item } from './Item';

// export const ItemsList = ({items}) => {
// 	return <>
// 		{
// 			items.map((item, idx) => {
// 				return <Item item={item} key={idx} />
// 			})
// 		}
// 	</>
// } 


import React from "react";

function ItemsList(props) {
	return (
		<ul className="inventory">
			{props.items.map(item => (
				<li key={item.id}>
					<h2>
						<button onClick={() => props.setCurrentItem(item)}>{item.name}</button>
					</h2>
					<img src={item.image} alt="" />
				</li>
			))}
		</ul>
	);
}

export default ItemsList;

//checked and compared to Kierans code
