import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, isSinglePageView, setSinglePageView, fetchItems, itemObject, setItemObject}) => {
   /*const handleItemClick = async (id) => {
    const response = await fetch (`${apiURL}/items/${id}`)
    const singleItem = await response.json()
    console.log(singleItem)
    setSinglePageView(!isSinglePageView)
    setItemObject([singleItem])
  } */

   // two states and one says is set singlepage trueand the second stores the id
   
   //if itemObject.length >0 map
   
   return <>
		
        {
            itemObject.length 
                ? itemObject.map((item, idx) => <Item item={item} key={idx} itemObject ={itemObject} setItemObject = {setItemObject} />)
                : items.map((item, idx) => <Item item={item} key={idx} itemObject ={itemObject} setItemObject = {setItemObject} />)
		}
	</>
}
