import { useSelector } from "react-redux";
import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const amount = useSelector((store) => store.card.amount);
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
  };
  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <h3>Let's Shop!</h3>
        </Link>
        <div className="nav-search">
          <form onSubmit={submitHandler}>
            <input
              className="search-input"
              type={"text"}
              placeholder="Search..."
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="nav-container">
          <FaShoppingCart className="nav-icon" />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
      <div className="nav-sub-links">
        <p>MEN</p>
        <p>WOMEN</p>
        <p>ALL</p>
        <p>ELECTRONICS</p>
        <p>JEWELRY</p>
      </div>
    </nav>
  );
};

export default Navbar;
