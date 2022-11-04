import React from 'react';
import { Item } from './Item';


export const ItemsList = ({items, handleClick, individualItem, setIndividualItem}) => {
	return <>
		{
			items.map((item, idx) => {
				return <div onClick={() => handleClick(item.id)} key={idx} >
					<Item item={item}  />
					</div>
			})
		}
	</>
} 