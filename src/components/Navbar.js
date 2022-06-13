import { useDispatch, useSelector } from "react-redux";
import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { men, women, jewelery, electronics } from "../features/card/cardSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const amount = useSelector((store) => store.card.amount);

  return (
    <nav>
      <div className="navbar">
        <Link className="link" to="/">
          <h3>Let's Shop!</h3>
        </Link>

        <div className="nav-container">
          <Link className="link" to="cart">
            <FaShoppingCart className="nav-icon" />
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="nav-sub-links">
        <Link className="link" to="Category">
          <button onClick={() => dispatch(men())} className="btn-nav">
            MEN
          </button>
        </Link>
        <Link className="link" to="Category">
          <button onClick={() => dispatch(women())} className="btn-nav">
            WOMEN
          </button>
        </Link>

        <Link className="link" to="/">
          <button className="btn-nav">ALL</button>
        </Link>
        <Link className="link" to="Category">
          <button onClick={() => dispatch(electronics())} className="btn-nav">
            ELECTRONICS
          </button>
        </Link>
        <Link className="link" to="Category">
          <button onClick={() => dispatch(jewelery())} className="btn-nav">
            JEWELRY
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
