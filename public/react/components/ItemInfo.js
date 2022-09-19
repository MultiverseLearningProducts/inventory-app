import React, { useEffect } from "react";

export const ItemInfo = ({item}) => {
    
    return (
            <main>
              <h1>{item.title}</h1>
              <h3>Price: {item.price}</h3>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <img src={item.image}></img>
            </main>
      )    
}

  