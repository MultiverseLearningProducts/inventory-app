import React, { useState, useEffect } from 'react';
import { Item } from './Item';
import apiURL from '../api';

export const ItemsList = ({items, setItems}) => {

	const [individualItem, setIndividualItem] = useState("")

	const handleClick = async(id) => {
		console.log("Clicked")
		console.log(id)
		try {
			const response = await fetch(`${apiURL}/items/${id}`);
			const itemsData = await response.json();
			console.log(itemsData)
			setIndividualItem(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	return (<div>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} clicked={handleClick}/>
			})
		}
	</div>)
} 
