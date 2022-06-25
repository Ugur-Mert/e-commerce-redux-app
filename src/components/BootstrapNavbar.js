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
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  men,
  women,
  jewelery,
  electronics,
  filteredProducts,
} from "../features/card/cardSlice";

import { openLogin } from "../features/modals/modalSlice";

import Logo from "./images/LOGO.png";
import LoginModal from "./Modals/LoginModal";

export const BootstrapNavbar = () => {
  const dispatch = useDispatch();
  const amount = useSelector((store) => store.card.amount);
  const inputRef = useRef("");

  const filterProducts = () => {
    dispatch(filteredProducts(inputRef.current.value));
  };

  const { isLoginOpen } = useSelector((store) => store.modal);

  return (
    <Navbar className="text-center" bg="primary" expand="lg">
      {isLoginOpen ? <LoginModal /> : ""}
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
            <Form className="d-flex ">
              <FormControl
                type="search"
                placeholder="Search "
                className="me-2"
                aria-label="Search"
                ref={inputRef}
                onChange={filterProducts}
              />
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
                  variant="a-link"
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
                  variant="a-link"
                >
                  WOMEN
                </Button>
              </Link>
              <hr />
              <Link to="products">
                <Button
                  className=" mx-auto  category-btn"
                  size="sm"
                  variant="a-link"
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
                  variant="a-link"
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
                  variant="a-link"
                >
                  JEWELRY
                </Button>
              </Link>
              <hr />
            </Nav>
          </Navbar.Collapse>
        </Col>
        <Col>
          <Row className="mx-auto">
            <Col
              className="col-6 text-end  "
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button
                variant="outline-dark"
                onClick={() => dispatch(openLogin())}
              >
                <FaUserAlt />
              </Button>
            </Col>
            <Col className="col-6 ">
              <p>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="cart"
                >
                  <FaShoppingCart /> Cart{" "}
                  {amount > 0 ? (
                    <span className="amount"> : {amount} </span>
                  ) : (
                    ""
                  )}
                </Link>
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    </Navbar>
  );
};
