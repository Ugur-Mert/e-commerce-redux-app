import { Link } from "react-router-dom";
import "./CardItem.css";
import SingleCardPage from "./pages/SingleCardPage";
import { FaStar } from "react-icons/fa";
import { addItem } from "../features/card/cardSlice";
import { useDispatch } from "react-redux";

const CardItem = ({ id, image, title, price, rating }) => {
  const dispatch = useDispatch();
  return (
    <div className="card-item">
      <Link className="link" to={`/product/${id}`} element={<SingleCardPage />}>
        <div className="card-image-container">
          <img className="card-image" src={image} alt={title} />
        </div>
        <h4>{title.slice(0, 20)}...</h4>
        <h4 className="rate-count">
          <FaStar />
          {rating.rate} - ({rating.count})
        </h4>
        <h4>${price}</h4>
      </Link>
      <button
        className="add-button"
        onClick={() => {
          dispatch(addItem(id));
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default CardItem;
