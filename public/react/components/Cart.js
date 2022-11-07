import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import apiURL from "../api";

function Cart({ items, setItems }) {
  // console.log(items);
  return (
    <div className="cart">
      <h2 className="cart-header">Cart</h2>
      <div className="line">
        <div className="tablediv">
          <table className="cart-categories">
            <tr>
              <th align="left">Item Details</th>
              <th align="left">
                <div className="pricecat"> Price</div>
              </th>
              <th align="left">
                <div className="qtycat"> QTY</div>
              </th>
              <th align="right">Remove</th>
            </tr>
          </table>
        </div>
        {items.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
