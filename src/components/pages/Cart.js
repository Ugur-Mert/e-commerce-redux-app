import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/card/cardSlice";

export const Cart = (id) => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.card);

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
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="cart-footer">
        <p className="total">
          Subtotal: <span> $ {total.toFixed(2)}</span>
        </p>
      </div>
      <button onClick={() => dispatch(clearCart())}> Clear </button>
    </div>
  );
};
