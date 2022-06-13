import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  calculateTotal,
  getProductItems,
} from "../src/features/card/cardSlice";
import CardContainer from "./components/CardContainer";
import { Routes, Route } from "react-router-dom";
import SingleCardPage from "./components/pages/SingleCardPage";
import { Cart } from "./components/pages/Cart";
import { Category } from "./components/pages/Category";
import { BootstrapNavbar } from "./components/BootstrapNavbar";
function App() {
  const { isLoading } = useSelector((state) => state.card);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(getProductItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <main>
      <BootstrapNavbar />

      <Routes>
        <Route path="" element={<CardContainer />} />
        <Route path="category" element={<Category />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<SingleCardPage />}>
          <Route path=":productId" element={<SingleCardPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
