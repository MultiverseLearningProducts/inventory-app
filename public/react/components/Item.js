import React from "react";
import  { useState, useEffect } from "react";

export const Item = (props) => {

   



    return <>
	<div className="itemContainer">
		<h3 className="itemtitle">{props.item.title}</h3>
        <img class='img' src={props.item.image} alt={props.item.title}></img>
	</div>
        

    </>
}