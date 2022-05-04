import { useDispatch } from "react-redux";

const CardItem = ({ id, image, title, price }) => {
  return (
    <article className="card-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>${price}</h4>
      </div>
    </article>
  );
};

export default CardItem;
