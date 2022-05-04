import { useDispatch } from "react-redux";
import "./CardItem.css";
const CardItem = ({ id, image, title, price }) => {
  return (
    <div className="card-item">
      <div className="card-image-container">
        <img className="card-image" src={image} alt={title} />
      </div>
      <h4>{title.slice(0, 20)}...</h4>
      <h4>${price}</h4>
    </div>
  );
};

export default CardItem;
