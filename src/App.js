import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  calculateTotal,
  getProductItems,
} from "../src/features/card/cardSlice";
import { Routes, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Placeholder from "react-bootstrap/Placeholder";
import { Container, Row, Col } from "react-bootstrap";

import CardContainer from "./components/CardContainer";
import SingleCardPage from "./components/pages/SingleCardPage";
import { Cart } from "./components/pages/Cart";
import { Category } from "./components/pages/Category";
import { BootstrapNavbar } from "./components/BootstrapNavbar";
import Footer from "./components/Footer";

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
      <Container>
        <Row>
          <Col className="mx-auto text-center">
            <Placeholder as="h1" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
            <h4 style={{ fontWeight: 400 }}>
              The process may take a few seconds. Please wait.
            </h4>
            <Spinner
              lg={12}
              className="spinner"
              animation="border"
              variant="primary"
            />
          </Col>
        </Row>
      </Container>
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
      <Footer />
    </main>
  );
}

export default App;
