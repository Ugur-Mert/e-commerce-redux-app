import CardItem from "./CardItem";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./CardItem.css";
const CardContainer = () => {
  const { cardItems } = useSelector((store) => store.card);

  return (
    <Container>
      <Row className="mx-auto text-center ">
        {cardItems.map((item) => {
          return (
            <Col key={item.id} className="m-3 card-container  text-center">
              <CardItem key={item.id} {...item} />{" "}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardContainer;
