import React, { useState } from 'react';
import { Items } from './Items';

export const ItemsList = ({items, setSingleItem, setIsAddingItem}) => {
	
	
	return <>
	<h2>All Items</h2>
		{
			items.map((item, idx) => {
				return <Items item={item} key={idx} setSingleItem={setSingleItem}/>
			})
		}
	<button onClick={()=>{setIsAddingItem(true)}}>
		Add an Item
	</button>
	</> 
} 


