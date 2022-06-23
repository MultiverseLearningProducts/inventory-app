import React from 'react';
import { Item } from './Item';
<<<<<<< HEAD
import { ItemForm } from './ItemForm';
import { UpdateForm } from './UpdateForm';
=======
// import { ItemForm } from './ItemForm';
>>>>>>> 3c3bd690b3a3ef3733b21e0b01a8ca48e6c08b2e

export const ItemsList = ({items, setitem, item, addItem}) => {
	return <div className='allItems'>
		{
			items.map((item_, idx) => {
				return <Item item={item_} key={idx} setitem={setitem} setUpdatedItem={item}/>
			})
		}

	</div>
} 