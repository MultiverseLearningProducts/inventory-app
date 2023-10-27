import React from "react"

export const ItemShow = ({setItem, item}) => {


    return(
        <div>
            <div>
                <h2>🔥!</h2>
			    <button onClick={()=>setItem({})}>Back</button>
            </div>
            <div>
                <img src={item.image}/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
            </div>
        </div>
    )

}