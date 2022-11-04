import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, setItems, singleItem, setSingleItem}) => {
	return singleItem ? (
		singleItem.map((item, idx) => {
			return <Item item={item} setItems={setItems} singleItem={singleItem} setSingleItem={setSingleItem} key={idx} />
		} )

	) : (<>
		{
			items.map((item, idx) => {
				return <Item item={item} setItems={setItems} setSingleItem={setSingleItem} key={idx} />
			})
		}
	</>)
} 