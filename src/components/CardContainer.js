import CardItem from "./CardItem";
import { useSelector } from "react-redux";
import "./CardContainer.css";
const CardContainer = () => {
  const { cardItems } = useSelector((store) => store.card);

  return (
    <section className="card">
      <div className="cards">
        {cardItems.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CardContainer;
