import React from "react";
import  { useState, useEffect } from "react";

export const Search = ({fetchItems, items, searching, setSearching, setItems}) => {

    const [categorySearch, setCategorySearch] = useState(false)
    const [search, setSearch] = useState(false)
    
    useEffect(() => {
        fetchItems()
    },[])

    const getCategory = (category) => {
        const categoryItem = items.filter(item => item.category === category)
        setCategorySearch(categoryItem)
        setSearch(!search)
    }

    const goBack = async () => {
        fetchItems();
        setSearching(false);
      };


    return <>   
    <section className="searchBoxContainer">
        <div>
            <br/>
            <p>Men's Clothing</p>
            <input onClick={() => {getCategory("Men's clothing");setSearch(!search)}} type = 'checkbox'/>
        </div>
        <br/>
        <div>
            <p>Women's Clothing</p>
            <input onClick={() => {getCategory("Women's clothing");setSearch(!search)}} type = 'checkbox'/>
        </div>
        <br/>
        <div>
            <p>Jewelery</p>
            <input onClick={() => {getCategory("Jewelery");setSearch(!search)}} type = 'checkbox'/>
        </div>
        <br/>
        <div>
            <p>Electronics</p>
            <input onClick={() => {getCategory("Electronics");setSearch(!search)}} type = 'checkbox'/>
        </div>
        <br/>
        <button className='gobackButton' onClick={() => goBack()}>Go Back</button>
    </section>
    <div className="searchResults">
        {search ? categorySearch.map(item => <>
        <div key={item.id}>
            <h3 className="carouselTitle">{item.title}</h3>
            <br/>
            <img className="img"src={item.image} alt={item.title}></img>
            <br/>
        </div>
        <br/>
        </>) : null}
    </div>
    </>
}