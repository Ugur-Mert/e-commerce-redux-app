import { useSelector } from "react-redux";
import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const amount = useSelector((store) => store.card.amount);
  return (
    <nav>
      <div className="navbar">
        <h3>Lets Shop!</h3>
        <div className="nav-search">
          <input
            className="search-input"
            type={"text"}
            placeholder="Search..."
            //onChange={handleSearch}
            //value={search}
          />
          <FaSearch />
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
        <p>ELECTRONİCS</p>
        <p>JEWELERY</p>
      </div>
    </nav>
  );
};

export default Navbar;
