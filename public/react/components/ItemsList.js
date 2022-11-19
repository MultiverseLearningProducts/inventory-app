import React from 'react';
import { Item } from './Item';
import apiURL from '../api'

export const ItemsList = ({items,  setItem, isSinglePageView, setSinglePageView, fetchItems, itemObject, setItemObject}) => {
   const handleItemClick = (id) => {
    console.log("Item even triggered")
  }

   // two states and one says is set singlepage trueand the second stores the id
   
   
   
   return <>
		
        {
			items.map((item, idx) => {
				return <Item item={item} key={idx} itemObject ={itemObject} setItemObject = {setItemObject} handleItemClick = {handleItemClick} />
			})
		}
	</>
} 
