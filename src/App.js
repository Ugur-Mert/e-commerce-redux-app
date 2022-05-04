import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getProductItems } from "../src/features/card/cardSlice";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
function App() {
  const { cardItems, isLoading } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CardContainer />
    </main>
  );
}

export default App;
