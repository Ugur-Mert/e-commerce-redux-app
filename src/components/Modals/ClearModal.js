import { closeModal } from "../../features/modals/modalSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/card/cardSlice";
import "./ClearModal.css";
import { Container, Button, Row, Col } from "react-bootstrap";

const ClearModal = () => {
  const dispatch = useDispatch();

  return (
    <Container className="modal-container">
      <Row className="text-center modal-window ">
        <Row className="mt-5">
          <h4>Remove all items from your shopping cart?</h4>
        </Row>
        <Col></Col>
        <Col></Col>
        <Col className="mt-3">
          <Button
            variant="success"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </Button>
        </Col>
        <Col className=" mt-3 mb-5">
          <Button
            variant="danger"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default ClearModal;
