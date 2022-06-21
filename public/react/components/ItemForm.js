import React from 'react'

export const ItemForm = ({setitem, item, addItem}) => {
return <div className="item-container" id="item-add">
<h3>add new item </h3>
<form>
    <label>title</label>
    <input onChange={(event) => {
        setitem({...item, title: event.target.value})
    }} type="text"/>
    <label>description</label>
    <input onChange={(event) => {
        setitem({...item, description: event.target.value})
     }} type="text"/>
    <label>price</label>
    <input onChange={(event) => {
        setitem({...item, price: event.target.value})
    }}type="text"/>
    <label>category</label>
    <input onChange={(event) => {
        setitem({...item, category: event.target.value})
    } }type="text"/>
    <label>image</label>
    <input onChange={(event) => {
        setitem({...item, image: event.target.value})
    }}type="text"/>
</form>
</div>
}