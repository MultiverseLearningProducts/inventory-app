import React from "react";
import  { useState, useEffect } from "react";

export const Search = ({fetchItems, items, setItems}) => {

    const [categorySearch, setCategorySearch] = useState(false)
    const [searching, setSearching] = useState(false)
    
    useEffect(() => {
        fetchItems()
    },[])

    const getCategory = (category) => {
        const categoryItem = items.filter(item => item.category === category)
        setCategorySearch(categoryItem)
        setSearching(!searching)
    }


    return <>   
    <section className="searchBoxContainer">
        <div>
            <p>Men's Clothing</p>
            <input onClick={() => {getCategory("Men's clothing");setSearching(!searching)}} type = 'checkbox'/>
        </div>
        <div>
            <p>Women's Clothing</p>
            <input onClick={() => {getCategory("Women's clothing");setSearching(!searching)}} type = 'checkbox'/>
        </div>
        <div>
            <p>Jewelery</p>
            <input onClick={() => {getCategory("Jewelery");setSearching(!searching)}} type = 'checkbox'/>
        </div>
        <div>
            <p>Electronics</p>
            <input onClick={() => {getCategory("Electronics");setSearching(!searching)}} type = 'checkbox'/>
        </div>
    </section>
    <div className="searchResults">
        {searching ? categorySearch.map(item => <>
        <div key={item.id}>
            <h3 className="carouselTitle">{item.title}</h3>
            <br/>
            <img className="img"src={item.image} alt={item.title}></img>
        </div>
        </>) : null}
    </div>
    </>
}