import React,{useState} from 'react';


export function Items (props) {

  const [nameClicked,setNameClicked] = useState(false)
  
  const itemData = (
    <div>
      <p>Hello {props.items.description}</p>
      <p>{props.items.category}</p>
      <img src={props.items.image} alt={props.items.name} />
      <p>{props.items.price}</p>
    </div>
  )

  return <>
    <h3><button onClick={()=>{setNameClicked(!nameClicked)}}>Button {props.items.name}</button></h3>
    { itemData && nameClicked}
  </>
}

	