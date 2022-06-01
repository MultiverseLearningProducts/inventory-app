import React, { useState } from "react";

export function Items(props) {
  const [nameClicked, setNameClicked] = useState(false);

  const itemData = (
    <div>
      <p> {props.item.description}</p>
      <p>{props.item.category}</p>
      <img src={props.item.image} alt={props.item.title} />
      <p>{props.item.price}</p>
    </div>
  );

  return (
    <>
      <h3>
        <button
          onClick={() => {
            setNameClicked(!nameClicked);
          }}
        >
          {props.item.title}
        </button>
      </h3>
      {nameClicked && itemData}
    </>
  );
}
