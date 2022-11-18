import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, showSingleItem, setShowSingleItem, currentItem,setCurrentItem, setItems}) => {

    // Singple page view
    return <>
        {
            (showSingleItem) ? (
                items.map((item, idx) => {
                return(item.title === currentItem) ?  (
                <Item item={item} key={idx} showSingleItem={showSingleItem} currentItem={currentItem} setShowSingleItem={setShowSingleItem} setItems={setItems} setCurrentItem={setCurrentItem}/> 
                ): null
            })
            ) : (
                items.map((item, idx) => {
                return <Item item={item} key={idx} showSingleItem={showSingleItem} currentItem={currentItem} setShowSingleItem={setShowSingleItem} setItems={setItems} setCurrentItem={setCurrentItem} />
            }))
        }
    </>
}
