import { useSelector } from "react-redux";

const SingleCardPage = ({ image, title, price, description }) => {
  const { singlePageItems } = useSelector((store) => store.cardPage);

  return (
    <div>
      <h1>{singlePageItems.title}</h1>
      <img src={singlePageItems.image} alt={singlePageItems.title} />
      <p>{singlePageItems.description}</p>
      <p>{singlePageItems.price}</p>
    </div>
  );
};

export default SingleCardPage;
