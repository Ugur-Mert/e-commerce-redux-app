import CardItem from "./CardItem";
import { useSelector } from "react-redux";

const CardContainer = () => {
  const { cardItems } = useSelector((store) => store.card);

  return (
    <section className="card">
      <header>
        <h2>PRODUCTS</h2>
      </header>
      <div>
        {cardItems.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CardContainer;
