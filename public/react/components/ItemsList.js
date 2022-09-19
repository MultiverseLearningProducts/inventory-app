import React from 'react';
import { Item } from './Item';


export const ItemsList = ({items, handleClick,setIsAddingItem}) => {
	return <>
		<button onClick={() => setIsAddingItem(true)}>Add a New Item</button>
export const ItemsList = ({items, handleClick}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} handleClick={handleClick} />
			})
		}
	</>
} 
