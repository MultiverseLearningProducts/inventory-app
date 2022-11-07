import React from "react";
import  { useState, useEffect } from "react";

export const Item = (props) => {

   



   {/*} const goBack = async() => {
		try {
			const response = await fetch(`${apiURL}/items/`);
			const allData = await response.json();
			setPages(allData);
			setItems();
		} catch (err) {
			console.log("Oh no an error! ", err)
		}

	}*/}

    return <>
	<div className="itemContainer">
		<h3 className="itemtitle">{props.item.title}</h3>
        <img class='img' src={props.item.image} alt={props.item.title}></img>
	</div>
        

    </>
}