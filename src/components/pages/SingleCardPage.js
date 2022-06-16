import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SingleCardPage.css";
import { FaStar } from "react-icons/fa";
import { addItem } from "../../features/card/cardSlice";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

export default function SingleCardPage() {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [singleLoading, setSingleLoading] = useState(false);
  const url = `https://fakestoreapi.com/products/${params.productId}`;
  const dispatch = useDispatch();

  useEffect(() => {
    setSingleLoading(true);
    axios.get(url).then((res) => setSingleProduct(res.data));
    setTimeout(() => {
      setSingleLoading(false);
    }, 2500);
  }, [url]);

  return (
    <Container>
      {singleLoading ? (
        <Row className="mx-auto text-center">
          <Col className="mt-5">
            <Spinner
              className="spinner "
              animation="border"
              variant="primary"
            />
          </Col>
        </Row>
      ) : (
        <Row className=" single-left-container">
          <Col sm={12} lg={6} className="text-center mb-3">
            <img
              className="single-left"
              src={singleProduct.image}
              alt={singleProduct.title}
            />
          </Col>
          <Col sm={12} lg={6}>
            <h1>{singleProduct.title}</h1>
            <Col>
              <div className="rating-votee">
                <Col className="text-center ">
                  {singleProduct.rating ? (
                    <h5>
                      <FaStar /> {singleProduct.rating.rate}
                    </h5>
                  ) : null}
                </Col>
                <Col>
                  {singleProduct.rating ? (
                    <h5>({singleProduct.rating.count})</h5>
                  ) : null}
                </Col>
                <Col>
                  <h5>$ {singleProduct.price}</h5>
                </Col>
              </div>
            </Col>
            <h5>Category: {singleProduct.category}</h5>
            <p className="single-page-description">
              {singleProduct.description}
            </p>
            <Col className="text-center mt-3">
              <Button
                variant="outline-primary"
                className="single-page-button "
                onClick={() => {
                  dispatch(addItem(singleProduct.id));
                }}
              >
                Add to Cart
              </Button>
            </Col>
          </Col>
        </Row>
      )}
    </Container>
  );
}
