import React, { useState } from "react";
import { post } from "../../../server/routes";
import apiURL from "../api"; 

export const openForm = ({ props }) => {
    const fetchopenForm = async() => {
    const [itemname, setItemname] = useState('');
    const response = await fetch (`${apiURL}/items`,{method:"Post"} );
    }

    return (
        <form onSubmit = {fetchopenForm}> 
        <input type = 'text' placeholder="title" value ={itemname}
        onSubmit = {ev => setItemname(ev.target.value)}/> 
        
        <input  type = 'number' placeholder= "price" value ={price}
        onSubmit = {ev => setItemname(ev.target.value)}/>
        
        <input  type = 'text' placeholder="description" value ={itemname}
        onSubmit = {ev => setItemname(ev.target.value)}/>
        
        <input  type = 'text' placeholder = "category" value ={itemname}
        onSubmit = {ev => setItemname(ev.target.value)}/>
        
        <input  type = 'text' placeholder = "image" value ={URL}
        onSubmit = {ev => setItemname(ev.target.value)}/>
        
        <button type = "submit">Submit</button>
        </form> 
    );



};


   
