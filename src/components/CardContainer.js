import CardItem from "./CardItem";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./pages/Category.css";
const CardContainer = () => {
  const { cardItems } = useSelector((store) => store.card);

  return (
    <Container>
      <Row
        style={{
          minHeight: "100vh",
        }}
        className="mx-auto text-center mt-5 mb-5"
      >
        {cardItems.map((item) => {
          return (
            <Col key={item.id} className="m-3 cards text-center">
              <CardItem key={item.id} {...item} />{" "}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardContainer;
