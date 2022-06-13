import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./CardItem.css";
import SingleCardPage from "./pages/SingleCardPage";
import { FaStar } from "react-icons/fa";
import { addItem } from "../features/card/cardSlice";
import { useDispatch } from "react-redux";

const CardItem = ({ id, image, title, price, rating }) => {
  const dispatch = useDispatch();
  return (
    <div className="card-item ">
      <Link className="link" to={`/product/${id}`} element={<SingleCardPage />}>
        <div className="card-image-container">
          <img className="card-image" src={image} alt={title} />
        </div>
        <h5>{title.slice(0, 20)}...</h5>
        <p className="rate-count">
          <FaStar />
          {rating.rate} - ({rating.count})
        </p>
        <p>${price}</p>
      </Link>
      <Button
        variant="outline-primary m-3"
        onClick={() => {
          dispatch(addItem(id));
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default CardItem;
