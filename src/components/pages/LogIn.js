import React from "react";
import { Container, Button, Col, Row, Form } from "react-bootstrap";

import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

const LogIn = () => {
  return (
    <Container>
      <Row>
        <Col className="col-4 mx-auto m-5 fw-semibold shadow ">
          <Row>
            <Form className="p-5 ">
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Col className="text-center  mx-auto">
                <Button
                  variant="outline-primary"
                  className="mt-3"
                  type="submit"
                >
                  Login
                </Button>
              </Col>
            </Form>
          </Row>
          <Row>
            <Col className="col-5">
              {" "}
              <hr />
            </Col>
            <Col className="col-2">
              <p className="text-center">or</p>
            </Col>
            <Col className="col-5">
              {" "}
              <hr />
            </Col>
          </Row>
          <Col className="text-center mx-auto">
            <Button variant="outline-primary" className="mt-3" type="submit">
              Sign Up
            </Button>
          </Col>
          <Row className="justify-content-around text-center text-primary fs-3 p-5">
            <Col>
              <BsFacebook />
            </Col>
            <Col>
              <BsTwitter />
            </Col>
            <Col>
              <BsGoogle />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
