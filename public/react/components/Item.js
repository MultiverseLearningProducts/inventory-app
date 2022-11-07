import React from "react";
import  { useState, useEffect } from "react";

export const Item = (props) => {

   



    return <>
        <br/>
        <h3 className="itemTitle">{props.item.title}</h3>
        <img class='img' src={props.item.image} alt={props.item.title}></img>
        

    </>
}