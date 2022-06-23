import React from 'react';
import apiURL from '../api';
import { UpdateForm } from './UpdateForm';

export const Item = (props) => {

  async function deleteitem(itemId){
		try {
			await fetch(`${apiURL}/items/${itemId}`,  {
			  method: 'DELETE',
			 	headers: {
			   'Content-Type': 'application/json',
			   },
		   	});
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

  return <>
  

    <div className='itemCard'>

      <h3 className='item-title'>{props.item.title}</h3>

      <div className='item-image'>
        <img src={props.item.image} alt={props.item.title} />
      </div>

      <p className='item-description'>{props.item.description}</p>
      <button onClick={()=>deleteitem(props.item.id)}>delete item</button>
      <button>LINK TO UPDATE ITEM FORM</button>
      <UpdateForm setitem={props.setitem} setUpdatedItem={props.setUpdatedItem} item={props.item}  />
    </div>
 
  </>
  
} 

//1. delete button that will invoke the delete fetch request, passing in the id
//2. fetch request