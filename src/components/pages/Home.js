import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Home.css";
import Lady from "../images/Image.png";
import Delivery from "../images/delivery.png";

const Home = () => {
  return (
    <Container>
      <Row className=" home mx-auto m-0">
        <Col className=" img-txt text-center mx-auto ">
          <img className="home-img " src={Lady} alt="lady" />
        </Col>
        <Col className=" img-txt mx-auto m-auto">
          <p className="text-center arrival">NEW ARRIVALS</p>
          <p className="just-for">JUST FOR </p>
          <p className="you">You...</p>
          <Row>
            <Col className="col-8 online">
              <p>
                FOR ONLINE <br />
                ORDER
              </p>
            </Col>
            <Col className="col-4 thirty text-center">
              <p>30%</p>
              <p>OFF</p>
            </Col>
            <Row className="mt-5 mx-auto text-center">
              <Col>
                <Link to="products">
                  <Button variant="outline-primary">Let's Shop!</Button>
                </Link>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row className=" mb-3">
        <p className="text-center just-for m-3">Fast Delivery</p>

        <Col className="m-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium
            aenean pharetra magna ac placerat vestibulum lectus mauris ultrices.
            Eget sit amet tellus cras adipiscing enim eu turpis egestas.{" "}
          </p>
        </Col>
        <Col className="text-center">
          <img className="home-img " src={Delivery} alt="lady" />
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Home;
