import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import WeAre from "../images/whoweare .jpg";

const Whoweare = () => {
  return (
    <Container style={{ textAlign: "justify" }}>
      <Row className="mt-3 text-center">
        <h1>Who we are?</h1>
      </Row>
      <Row className="mb-3 ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor
          massa id neque aliquam vestibulum. Et egestas quis ipsum suspendisse
          ultrices gravida. Porttitor rhoncus dolor purus non enim praesent.
          Pellentesque habitant morbi tristique senectus. Aliquam faucibus purus
          in massa tempor nec feugiat. Semper feugiat nibh sed pulvinar proin
          gravida. Elit ut aliquam purus sit amet. Posuere sollicitudin aliquam
          ultrices sagittis orci a. Parturient montes nascetur ridiculus mus
          mauris vitae. Dictum sit amet justo donec. Suscipit tellus mauris a
          diam maecenas sed enim. Purus faucibus ornare suspendisse sed nisi
          lacus. Vitae turpis massa sed elementum tempus egestas sed sed. Enim
          facilisis gravida neque convallis a cras semper auctor neque. Congue
          eu consequat ac felis. Nisl nisi scelerisque eu ultrices vitae auctor
          eu augue ut.
        </p>
      </Row>
      <hr />
      <Row className="text-center mx-auto">
        <Col className="align-text-middle">
          <p style={{ textAlign: "justify" }}>
            vestibulum morbi blandit cursus risus at ultrices mi tempus
            imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
            natoque penatibus et magnis dis parturient montes nascetur ridiculus
            mus mauris vitae ultricies leo integer malesuada nunc vel risus
            commodo viverra maecenas accumsan lacus vel facilisis volutpat est
            velit egestas dui id
          </p>
        </Col>
        <Col>
          <img
            style={{ width: "400px", height: "auto" }}
            src={WeAre}
            alt="weare"
          />
        </Col>
        <Col>
          <p style={{ textAlign: "justify" }}>
            vestibulum morbi blandit cursus risus at ultrices mi tempus
            imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
            natoque penatibus et magnis dis parturient montes nascetur ridiculus
            mus mauris vitae ultricies leo integer malesuada nunc vel risus
            commodo viverra maecenas accumsan lacus vel facilisis volutpat est
            velit egestas dui id
          </p>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Whoweare;
