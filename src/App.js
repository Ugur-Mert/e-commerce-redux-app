import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getProductItems } from "../src/features/card/cardSlice";
import CardContainer from "./components/CardContainer";
function App() {
  //const { cardItems } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductItems());
  }, [dispatch]);

  return (
    <main>
      <CardContainer />
    </main>
  );
}

export default App;
