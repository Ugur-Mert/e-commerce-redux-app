import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SingleCardPage.css";
import { FaStar } from "react-icons/fa";
import { addItem } from "../../features/card/cardSlice";
import { useDispatch } from "react-redux";

export default function SingleCardPage() {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const url = `https://fakestoreapi.com/products/${params.productId}`;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url).then((res) => setSingleProduct(res.data));
  });

  return (
    <div className="main-single-page">
      <div className="single-page">
        <img
          className="single-image"
          src={singleProduct.image}
          alt={singleProduct.title}
        />
        <div>
          <h1>{singleProduct.title}</h1>
          <div className="single-page-detail">
            {singleProduct.rating ? (
              <h5>
                <FaStar /> {singleProduct.rating.rate}
              </h5>
            ) : null}
            {singleProduct.rating ? (
              <h5>({singleProduct.rating.count})</h5>
            ) : null}
            <h5>Category: {singleProduct.category}</h5>
          </div>
          <p>$ {singleProduct.price}</p>
          <p className="single-page-description">{singleProduct.description}</p>
          <button
            className="single-page-button"
            onClick={() => {
              dispatch(addItem(singleProduct.id));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
