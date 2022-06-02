import React, { useState } from 'react';
import { Items } from './Items';

export const ItemsList = ({items, setSingleItem, setIsAddingItem}) => {
	
	
	return <>
	<div><button  className='header' onClick={()=>{setIsAddingItem(true)}}>
		Add an Item
	</button>
	<button className='header'>Cart</button></div>
		{
			items.map((item, idx) => {
				return <Items item={item} key={idx} setSingleItem={setSingleItem}/>
			})
		}
	
	</> 
} 


