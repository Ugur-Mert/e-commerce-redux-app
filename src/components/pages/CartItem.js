import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SingleCardPage from "./SingleCardPage";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../../features/card/cardSlice";
import { FaTrash } from "react-icons/fa";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import "./Cart.css";

export const CartItem = ({ id, image, title, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <Container className="cart-item ">
      <Row className="mx-auto text-center mt-3 mb-3  ">
        <Col className="carts">
          <Link
            className="link"
            to={`/product/${id}`}
            element={<SingleCardPage />}
          >
            <img className="cart-image" src={image} alt={title} />
          </Link>
        </Col>
        <Col className="carts">
          <Link
            className="link"
            to={`/product/${id}`}
            element={<SingleCardPage />}
          >
            <h5 className="cart-title">{title}</h5>
          </Link>
        </Col>
        <Col className="carts">
          <p>${price}</p>
        </Col>
        <Col className="carts mx-auto">
          <button
            className="cart-button"
            onClick={() => dispatch(increase({ id }))}
          >
            <BsArrowUp />
          </button>
          <p className="amount">{quantity}</p>
          <button
            className="cart-button"
            onClick={() => dispatch(decrease({ id }))}
          >
            <BsArrowDown />
          </button>
        </Col>
        <Col className="carts">
          <p className="remove-btn" onClick={() => dispatch(removeItem(id))}>
            <FaTrash />
          </p>
        </Col>
      </Row>
    </Container>
  );
};
