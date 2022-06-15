import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import "./Cart.css";
import { useDispatch } from "react-redux";

import { Container, Button, Row, Col } from "react-bootstrap";
import { openModal } from "../../features/modals/modalSlice";
import ClearModal from "../Modals/ClearModal";

export const Cart = (id) => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.card);
  const { isOpen } = useSelector((store) => store.modal);

  if (amount < 1) {
    return (
      <section className="cart-empty">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty.</h4>
          <hr />
        </header>
      </section>
    );
  }

  return (
    <Container>
      {isOpen ? <ClearModal /> : ""}
      <Row className="mx-auto text-center mt-5 mb-5">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr />
        <p className="total mb-3">
          Subtotal: <span> $ {total.toFixed(2)}</span>
        </p>
        <Col>
          <Button
            variant="outline-danger"
            onClick={() => dispatch(openModal())}
          >
            Clear Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
