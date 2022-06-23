import React from 'react';
import { Item } from './Item';
// import { ItemForm } from './ItemForm';

export const ItemsList = ({items, setitem, item, addItem}) => {
	return <div className='allItems'>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} />
			})
		}

	</div>
} 