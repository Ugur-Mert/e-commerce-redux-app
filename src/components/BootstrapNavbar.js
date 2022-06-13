import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row, Button, Col } from "react-bootstrap";
import "./BootstrapNavbar.css";
import { FaShoppingCart, FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { men, women, jewelery, electronics } from "../features/card/cardSlice";

export const BootstrapNavbar = () => {
  const dispatch = useDispatch();
  const amount = useSelector((store) => store.card.amount);

  return (
    <Navbar className="text-center" bg="primary" expand="lg">
      <Container>
        <Col className="align-middle">
          <Link
            style={{
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
              textDecoration: "none",
            }}
            to="/"
          >
            <FaShopify /> LOGO !
          </Link>
        </Col>

        <Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center ">
              <hr />
              <Link to="Category">
                <Button
                  onClick={() => dispatch(men())}
                  className=" mx-auto category-btn"
                  size="sm"
                  variant="link"
                >
                  MEN
                </Button>
              </Link>
              <hr />
              <Link to="Category">
                <Button
                  onClick={() => dispatch(women())}
                  className=" mx-auto  category-btn"
                  size="sm"
                  variant="link"
                >
                  WOMEN
                </Button>
              </Link>
              <hr />
              <Link to="/">
                <Button
                  className=" mx-auto  category-btn"
                  size="sm"
                  variant="link"
                >
                  ALL
                </Button>
              </Link>
              <hr />
              <Link className="link" to="Category">
                <Button
                  onClick={() => dispatch(electronics())}
                  className=" mx-auto  category-btn"
                  size="sm"
                  variant="link"
                >
                  ELECTRONICS
                </Button>
              </Link>
              <hr />
              <Link className="link" to="Category">
                <Button
                  onClick={() => dispatch(jewelery())}
                  className=" mx-auto  category-btn"
                  size="sm"
                  variant="link"
                >
                  JEWELRY
                </Button>
              </Link>
              <hr />
            </Nav>
          </Navbar.Collapse>
        </Col>
        <Col>
          <Link style={{ color: "white", textDecoration: "none" }} to="cart">
            <p>
              <FaShoppingCart /> Cart{" "}
              {amount > 0 ? <span className="amount"> {amount} </span> : ""}
            </p>
          </Link>
        </Col>
      </Container>
    </Navbar>
  );
};
