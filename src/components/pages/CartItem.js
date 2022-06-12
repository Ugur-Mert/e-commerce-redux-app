import React from "react";
import { Link } from "react-router-dom";
import SingleCardPage from "./SingleCardPage";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../../features/card/cardSlice";
import { FaTrash } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

export const CartItem = ({ id, image, title, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart" key={id}>
      <Link className="link" to={`/product/${id}`} element={<SingleCardPage />}>
        <img className="cart-image" src={image} alt={title} />
      </Link>
      <Link className="link" to={`/product/${id}`} element={<SingleCardPage />}>
        <h5 className="cart-title">{title}</h5>
      </Link>
      <p>${price}</p>
      <div>
        <button onClick={() => dispatch(increase({ id }))}>
          <IoMdArrowDropup />
        </button>
        <p className="amount">{quantity}</p>
        <button onClick={() => dispatch(decrease({ id }))}>
          <IoMdArrowDropdown />
        </button>
      </div>
      <p className="remove-btn" onClick={() => dispatch(removeItem(id))}>
        <FaTrash />
      </p>
    </div>
  );
};
