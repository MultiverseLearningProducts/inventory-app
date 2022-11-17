import React from 'react';
import { Item } from './Item';
import {Link} from "react-router-dom"

export const ItemsList = ({items}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} />
			})
		}
	</>
} 
