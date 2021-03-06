import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Home.css";
import Lady from "../images/Image.png";
import Delivery from "../images/delivery.png";
import Sale from "../images/sale.jpg";
import Black from "../images/black.jpg";
import Shoppe from "../images/shoppe.jpg";

const Home = () => {
  return (
    <Container>
      <Row className="m-4 ">
        <Col className="col-8 mx-auto text-center">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={Sale} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={Black} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={Shoppe} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <hr />
      <section className="section-1">
        <Row className=" home mx-auto m-0 bg-warning rounded">
          <Col className="img-txt text-center mx-auto  ">
            <img className="home-img  " src={Lady} alt="lady" />
          </Col>
          <Col className=" img-txt mx-auto m-auto">
            <p className="text-center arrival">NEW ARRIVALS</p>
            <p className="just-for">JUST FOR </p>
            <p className="you">You...</p>
            <Row className="mx-auto ">
              <Col className="col-8 online rounded-start">
                <p>
                  FOR ONLINE <br />
                  ORDER
                </p>
              </Col>
              <Col className="col-4  thirty text-center rounded-end">
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
      </section>
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
          <img className="home-img  " src={Delivery} alt="lady" />
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Home;
