import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeItem, increase, decrease } from "../../features/card/cardSlice";
import { FaTrash } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

export const CartItem = ({ id, image, title, price }) => {
  const dispatch = useDispatch();
  const { singleAmount } = useSelector((store) => store.card);
  return (
    <div className="cart" key={id}>
      <img className="cart-image" src={image} alt={title} />
      <h5 className="cart-title">{title}</h5>
      <p>${price}</p>
      <div>
        <button onClick={() => dispatch(increase({ id }))}>
          <IoMdArrowDropup />
        </button>
        <p className="amount">{singleAmount}</p>
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
