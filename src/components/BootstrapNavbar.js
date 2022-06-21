import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Col,
  Row,
  Form,
  FormControl,
} from "react-bootstrap";
import "./BootstrapNavbar.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  men,
  women,
  jewelery,
  electronics,
  filteredProducts,
} from "../features/card/cardSlice";
import Logo from "./images/LOGO.png";

export const BootstrapNavbar = () => {
  const dispatch = useDispatch();
  const amount = useSelector((store) => store.card.amount);
  const inputRef = useRef("");

  const filterProducts = () => {
    dispatch(filteredProducts(inputRef.current.value));
  };

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
            <img src={Logo} alt="logo" />
          </Link>
        </Col>

        <Col>
          <Row className="mb-3">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                ref={inputRef}
                onChange={filterProducts}
              />
              <Button variant="outline-light">
                <FaSearch />{" "}
              </Button>
            </Form>
          </Row>
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
              <Link to="products">
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
