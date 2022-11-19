import React, { useState } from 'react'
import apiURL from '../api'

export const Item = (props) => {
  const [details, setDetails] = useState(false)
  const handleSingleItem = () => {
    props.setSingleView(!props.singleView)
    if (props.singleItemId === 0) {
      props.setSingleItemId(props.item.id)
    } else {
      props.setSingleItemId(0)
    }
  }
  const userClick = async (props) => {
    const res = await fetch(`${apiURL}/items/${props.item.id}`)
    const dataDetails = await res.json()
    console.log(dataDetails)
    setDetails(dataDetails)
  }

  // THIS IS WHERE WE NEED ASSISTANCE...  IT IS DELETING THE DETAILS NOT THE ITEMS!
  const deleteHandler = async (props) => {
    const res = await fetch(`${apiURL}/items/${props.id}`, {
      method: 'DELETE',
    })
    const deleteItems = await res.json()
    setDetails(null)
  }
  ////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div onClick={handleSingleItem}>
        <h3>{props.item.title}</h3>
        <img src={props.item.image} alt={props.item.title} />
      </div>
      <div>
        {details ? (
          <>
            <h3>{props.item.title}</h3>
            <h4> Price:</h4>
            <p>{details.price}</p>
            <h4> Description:</h4>
            <p>{details.description}</p>
            <button onClick={handleSingleItem}>Back to main list</button>
            <button onClick={deleteHandler}>Delete Item</button>
          </>
        ) : (
          <div>
            <h3>{props.item.title}</h3>
            <button onClick={() => userClick(props)}> Details</button>
          </div>
        )}
      </div>
    </>
  )
}
