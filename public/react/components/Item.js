import React from 'react';

export const Item = (props) => {

  return <>


    <div className='itemCard'>

      <h3 className='item-title'>{props.item.title}</h3>

      <div className='item-image'>
        <img src={props.item.image} alt={props.item.title} />
      </div>

      <p className='item-description'>{props.item.description}</p>

    </div>
      
  </>
  
} 
	