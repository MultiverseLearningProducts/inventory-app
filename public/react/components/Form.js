import React, { useState } from "react";
import { post } from "../../../server/routes";
import apiURL from "../api"; 

export const openForm = ({ props }) => {
    const [itemtitle, setItemtitle] = useState('');
    const [itemprice, setItemprice] = useState('');
    const [itemdescription, setItemdescription] = useState('');
    const [itemcategory, setItemcategory] = useState('');
    const [itemimage, setItemimage] = useState(''); 

    const fetchopenForm = async() => {
        const response = await fetch (`${apiURL}/items`,{method:"Post"} );
        const data = await response.json();
       
    }

    return (
        <form onClick = {fetchopenForm}> 
        <input type = 'text' placeholder="title" value ={itemname}
        onChange = {ev => setItemtitle(ev.target.value)}/> 
        
        <input  type = 'number' placeholder= "price" value ={price}
        onChange = {ev => setItemprice(ev.target.value)}/>
        
        <input  type = 'text' placeholder="description" value ={itemname}
        onChange = {ev => setItemdescription(ev.target.value)}/>
        
        <input  type = 'text' placeholder = "category" value ={itemname}
        onChange = {ev => setItemcategory(ev.target.value)}/>
        
        <input  type = 'text' placeholder = "image" value ={URL}
        onChange = {ev => setItemimage(ev.target.value)}/>
        
        <button type = "submit">Submit</button>
        </form> 
    );



};


   
