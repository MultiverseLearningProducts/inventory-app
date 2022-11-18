import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, fetchItems, setSingleItemId, setSingleView, singleItemId, singleView}) => {
	return <>
		{
			items.map((item, idx) => {
				return (singleView ? (
					(singleItemId === item.id) ?
						(<Item item={item} key={idx} fetchItems ={fetchItems} singleItemId={singleItemId} singleView={singleView} 
						setSingleItemId={setSingleItemId} setSingleView={setSingleView}  />):null
				):(
					<Item item={item} key={idx} fetchItems ={fetchItems} singleItemId={singleItemId} singleView={singleView} 
				setSingleItemId={setSingleItemId} setSingleView={setSingleView}  />
				))
			})
		}
	</>
} 
