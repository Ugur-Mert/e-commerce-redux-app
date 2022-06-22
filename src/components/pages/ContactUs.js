import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container>
      <Row className="text-center mt-5">
        <p>CONTACT US</p>
      </Row>
      <Col className="mx-auto  col-6 bg-light m-3">
        <Row className="mx-auto ">
          <Row
            style={{
              display: "grid",
              alignItems: "center",
              minHeight: "50vh",
            }}
          >
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Row className="mb-3">
                  <Col>
                    <Form.Control type="text" placeholder="Name" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Surname" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-8">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Col>
                  <Col className="col-4">
                    <Form.Control type="number" placeholder="Phone Number" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your Message"
                />
              </Form.Group>
            </Form>
          </Row>
        </Row>
      </Col>
      <Row className="mb-3 mx-auto col-6">
        <Col className="text-center">
          <Button variant="outline-primary"> Send </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
