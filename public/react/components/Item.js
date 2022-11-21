import React, { useState } from 'react'
import apiURL from '../api'

export const Item = (props) => {
  
  
  

  

  const handleSingleItem = () => {
    props.setSingleView(!props.singleView)
    if (props.singleItemId === 0) {
      props.setSingleItemId(props.item.id)
    } else {
      props.setSingleItemId(0)
    }
  }
  const userClick = async () => {
    console.log(props.item)
    const res = await fetch(`${apiURL}/items/${props.item.id}`)
    const dataDetails = await res.json()
    console.log(dataDetails)
    props.setDetails(dataDetails)
    console.log(props.details)
    props.setSingleView(true)
    props.setSingleItemId(props.item.id)
   
  }

  // THIS IS WHERE WE NEED ASSISTANCE...  IT IS DELETING THE DETAILS NOT THE ITEMS!
  const deleteHandler = async () => {
    console.log(props.item)
    const res = await fetch(`${apiURL}/items/${props.item.id}`, {
      method: 'DELETE',
    })
    const deleteItems = await res.json()
    const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
      props.setItems(itemsData)
    props.setDetails(false)
    handleSingleItem()
  }
  const updateHandler =() =>{
    // props.setSingleView(true)
    // props.setSingleItemId(props.item.id)
    props.setEditItem(true)
    

  }
  
  ////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
   { 
   <div>
        <h3>{props.item.title}</h3>
        <img src={props.item.image} alt={props.item.title} />
      
       {Object.keys(props.details).length ?  (
          <>
            <h3>{props.item.title}</h3>
            <h4> Price:</h4>
            <p>{props.details.price}</p>
            <h4> Description:</h4>
            <p>{props.details.description}</p>
            <button onClick={handleSingleItem}>Back to main list</button>
            <button onClick={deleteHandler}>Delete Item</button>
            <button onClick ={updateHandler}>Update Item</button>
          </>
        ) : (
          <div>
            <h3>{props.item.title}</h3>
            <button onClick={userClick}> Details</button>
          </div>
        )}
        </div>
      
      }
      
    </>
  )
      
}
