import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
export const Cart = () => {
  const { cartItems } = useSelector((store) => store.card);
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div className="cart" key={item.id}>
            <img className="cart-image" src={item.image} alt={item.title} />
            <h5 className="cart-title">{item.title}</h5>
            <p>${item.price}</p>
          </div>
        );
      })}
      <hr />
      <p className="total">Subtotal: $500</p>
    </div>
  );
};
