import React from "react";
import  { useState, useEffect } from "react";

export const Item = (props) => {

   



    return <>
	<div className="itemContainer">
        <br/>
		<h3 className="itemtitle">{props.item.title}</h3>
        <br/>
        <img class='img' src={props.item.image} alt={props.item.title}></img>
	</div>
        

    </>
}