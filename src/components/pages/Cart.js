import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { useDispatch } from "react-redux";
import {
  removeItem,
  clearCart,
  increase,
  decrease,
  calculateTotal,
} from "../../features/card/cardSlice";
import { FaTrash } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

export const Cart = (id) => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.card);

  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div className="cart" key={item.id}>
            <img className="cart-image" src={item.image} alt={item.title} />
            <h5 className="cart-title">{item.title}</h5>
            <p>${item.price}</p>
            <div>
              <button onClick={() => dispatch(increase({ id }))}>
                <IoMdArrowDropup />
              </button>
              <p className="amount">{amount}</p>
              <button onClick={() => dispatch(decrease({ id }))}>
                <IoMdArrowDropdown />
              </button>
            </div>
            <p
              className="remove-btn"
              onClick={() => dispatch(removeItem(item.id))}
            >
              <FaTrash />
            </p>
          </div>
        );
      })}
      <hr />
      <div className="cart-footer">
        <p className="total">
          Subtotal: <span> $ {total.toFixed(2)}</span>
        </p>
      </div>
      <button onClick={() => dispatch(clearCart())}> Clear </button>
    </div>
  );
};
