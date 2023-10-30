import React from "react"
import apiURL from '../api';

export const ItemShow = ({setItem, item, fetchItems}) => {


    return(
        <div className="show">
            <div>
                <h2>🔥!</h2>
			    <button onClick={()=>setItem({})}>Back</button>
            </div>
            <div>
                <img src={item.image} width="100" height="100" />
                <p>{item.name}</p>
                <p>{Number(item.price).toFixed(2)}</p>
                <p>{item.description}</p>
            </div>
            <button className="deleteBtn" onClick={
					async()=>{
					fetch(`${apiURL}/items/`+ item.id,{
						method:"DELETE"
					})
                    fetchItems()
                    }
				}>
					Delete
				</button>
        </div>
    )

}