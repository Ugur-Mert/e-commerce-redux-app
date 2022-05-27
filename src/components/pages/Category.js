import React from "react";
import CardItem from "../CardItem";
import { useSelector } from "react-redux";
import "../CardContainer.css";

export const Category = () => {
  const { cardCategory } = useSelector((store) => store.card);
  return (
    <div className="cards">
      {cardCategory.map((item) => {
        return <CardItem key={item.id} {...item} />;
      })}
    </div>
  );
};
