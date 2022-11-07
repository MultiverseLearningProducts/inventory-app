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
        "price": 
        "description":
        "category":
        "image":
        <button type = "submit">Submit</button>
        </form> 
    );



};


   
