import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import "./BootstrapNavbar.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

import { SiAmericanexpress, SiVisa, SiMastercard } from "react-icons/si";

const Footer = () => {
  return (
    <Navbar
      className="text-center footer  bottom-0 start-50 translate-middle-x"
      bg="primary"
    >
      <Container>
        <Col>
          <h4 style={{ textDecoration: "underline" }}>Online Store</h4>
          <Row>
            <Link to="whoweare">
              <Button className="category-btn" variant="a-link">
                Who we are
              </Button>
            </Link>
          </Row>
          <Row>
            <Link to="contactus">
              <Button className="category-btn" variant="a-link">
                Contact us
              </Button>
            </Link>
          </Row>
        </Col>

        <Col className="mx-auto  footer-middle">
          <h4 style={{ textDecoration: "underline" }}>Social Media</h4>
          <Row>
            <Col>
              <BsFacebook />
            </Col>
            <Col>
              <BsInstagram />
            </Col>
            <Col>
              <BsTwitter />
            </Col>
            <Col>
              <BsYoutube />
            </Col>
            <Col>
              <BsLinkedin />
            </Col>
          </Row>
        </Col>

        <Col>
          <h4 style={{ textDecoration: "underline" }}>Secure shopping</h4>
          <Row className="mx-auto">
            <Col>
              <SiAmericanexpress />
            </Col>
            <Col>
              <SiVisa />
            </Col>
            <Col>
              <SiMastercard />
            </Col>
          </Row>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
