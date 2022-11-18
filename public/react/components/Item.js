import React from 'react';

export const Item = (props) => {

  const handleSingleItem = () => {
    props.setSingleView(!props.singleView)
    if(props.singleItemId === 0) {
      props.setSingleItemId(props.item.id)
    } else {
      props.setSingleItemId(0)
    }
  }

  return <>
  <div onClick={handleSingleItem}>
      <h3 >{props.item.title}</h3>
      <img src={props.item.image} alt={props.item.title} />
    </div>
  </>
} 
	