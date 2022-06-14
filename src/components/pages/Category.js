import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardItem from "../CardItem";
import { useSelector } from "react-redux";
import "./Category.css";

export const Category = () => {
  const { cardCategory } = useSelector((store) => store.card);
  return (
    <Container>
      <Row className="mx-auto text-center mt-5">
        {cardCategory.map((item) => {
          return (
            <Col
              sm={12}
              md={6}
              lg={4}
              key={item.id}
              className="m-3 mx-auto text-center cards"
            >
              <CardItem key={item.id} {...item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
