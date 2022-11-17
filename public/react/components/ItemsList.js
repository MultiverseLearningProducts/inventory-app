import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items}) => {
	console.log("hello", items)
    return <>
		
        {
            
    
			items.map((item, idx) => {
				return <Item item={item} key={idx} />
			})
		}
	</>
} 
