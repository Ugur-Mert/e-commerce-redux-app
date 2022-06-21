import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container>
      <Row className="text-center mt-5">
        <p>CONTACT US</p>
      </Row>
      <Col className="mx-auto col-6 mb-5">
        <Row
          style={{
            display: "grid",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Row>
        <Row className=" mx-auto col-6">
          <Button variant="outline-primary"> Send </Button>
        </Row>
      </Col>
    </Container>
  );
};

export default ContactUs;
