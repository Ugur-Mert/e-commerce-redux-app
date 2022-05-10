import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getProductItems } from "../src/features/card/cardSlice";
import { getPageItems } from "../src/features/cardPage/cardPageSlice";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SingleCardPage from "./components/pages/SingleCardPage";
import { Cart } from "./components/pages/Cart";
function App() {
  const { isLoading } = useSelector((state) => state.card);
  const { isLoadingPage } = useSelector((state) => state.cardPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductItems());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getPageItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isLoadingPage) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="" element={<CardContainer />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<SingleCardPage />}>
          <Route path=":productId" element={<SingleCardPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
