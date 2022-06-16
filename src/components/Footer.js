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

const Footer = () => {
  return (
    <Navbar
      className="text-center footer  bottom-0 start-50 translate-middle-x"
      bg="primary"
    >
      <Container>
        <Row className="mx-auto  footer">
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
      </Container>
    </Navbar>
  );
};

export default Footer;
