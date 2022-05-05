import { Link } from "react-router-dom";
import "./CardItem.css";
import SingleCardPage from "./pages/SingleCardPage";
const CardItem = ({ id, image, title, price }) => {
  return (
    <div className="card-item">
      <Link to={`/product/${id}`} element={<SingleCardPage />}>
        <div className="card-image-container">
          <img className="card-image" src={image} alt={title} />
        </div>
        <h4>{title.slice(0, 20)}...</h4>
        <h4>${price}</h4>
      </Link>
    </div>
  );
};

export default CardItem;
