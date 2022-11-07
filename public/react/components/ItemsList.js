import React, { useState } from 'react';
import { Item } from './Item';
import { SingleItem } from './SingleItem';
import { AddForm } from './AddForm';
import apiURL from '../api';

export const ItemsList = ({items, setItems, fetchItems}) => {
	const[isClicked, setIsClicked] = useState(false)

	console.log(isClicked)
	const handleClick = async (id) => {
		const response = await fetch(`${apiURL}/items/${id}`)
		const data = await response.json();
		setItems(data);
		setIsClicked(true);
	}
	return <>
		{isClicked && (
			<SingleItem
			items = {items}
			fetchItems={fetchItems}
			setIsClicked={setIsClicked}
			/>
		)}
		{!isClicked &&
			items.map((item, idx) => {
				return <Item onClick={handleClick} item={item} key={idx} />
			})
		}
		

	</>
} 
