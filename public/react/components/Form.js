import React from "react";
import { post } from "../../../server/routes";
import apiURL from "../api"; 

export const openForm = ({ props }) => {
    const fetchopenForm = async() => {
    const response = await fetch (`${apiURL}/items`,{method:"Post"} );
    }

    return (
        <form onSubmit = {fetchopenForm}> 
        <input/> 
        "title":
        <input/>
        "price": 
        <input/>
        "description":
        <input/>
        "category":
        <input/>
        "image":
        <button type = "submit">Submit</button>
        </form> 
    );



};


   
