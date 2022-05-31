import React from 'react';
import { Items } from './Items';

export const ItemsList = ({items}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Items item={item} key={idx} />
			})
		}
	</>
} 
