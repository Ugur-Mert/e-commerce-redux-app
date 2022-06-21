import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
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
          <p>Who we are</p>
          <p>Contact us</p>
        </Col>

        <Row className="mx-auto  footer-middle">
          <h4 style={{ textDecoration: "underline" }}>Social Media</h4>
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
        <Col>
          <h4 style={{ textDecoration: "underline" }}>Secure shopping</h4>
          <Row>
            <Col className="text-end">
              <SiAmericanexpress />
            </Col>
            <Col>
              <SiVisa />
            </Col>
            <Col className="text-start">
              <SiMastercard />
            </Col>
          </Row>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
