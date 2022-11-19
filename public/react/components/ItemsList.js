import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, isSinglePageView, setSinglePageView, itemObjectTitle, setItemObjectTitle}) => {
   /*const handleItemClick = async (id) => {
    const response = await fetch (`${apiURL}/items/${id}`)
    const singleItem = await response.json()
    console.log(singleItem)
    setSinglePageView(!isSinglePageView)
    setItemObject([singleItem])
  } */

   // two states and one says is set singlepage trueand the second stores the id
   
   //if itemObject.length >0 map
   
   return (
    <>
      {
        isSinglePageView
        ? items.filter(item => item.title === itemObjectTitle).map((item1, idx) => <Item item={item1} key={idx} setItemObjectTitle={setItemObjectTitle} isSinglePageView={isSinglePageView} setSinglePageView={setSinglePageView}/>)
        : items.map((item, idx) => <Item item={item} key={idx} setItemObjectTitle={setItemObjectTitle} isSinglePageView={isSinglePageView} setSinglePageView={setSinglePageView}/>)
      }
    </>
  )
}
