import React from 'react';
import { Items } from './Items';

export const ItemsList = ({items, setSingleItem}) => {
	return <>
	<h2>All Items</h2>
		{
			items.map((item, idx) => {
				return <Items item={item} key={idx} setSingleItem={setSingleItem}/>
			})
		}
	</>
} 
