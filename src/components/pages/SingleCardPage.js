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

  const url = `https://fakestoreapi.com/products/${params.productId}`;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url).then((res) => setSingleProduct(res.data));
  }, [url]);

  return (
    <Container>
      {singleProduct.length === 0 ? (
        <Row
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
          className="mx-auto text-center mb-5"
        >
          <Col className="mt-5">
            <Spinner
              className="spinner "
              animation="border"
              variant="primary"
            />
          </Col>
        </Row>
      ) : (
        <Row className=" single-left-container border border-primary m-3 rounded">
          <Col sm={12} lg={6} className="text-center mb-3">
            <img
              className="single-left"
              src={singleProduct.image}
              alt={singleProduct.title}
            />
          </Col>
          <Col sm={12} lg={6}>
            <h1>{singleProduct.title}</h1>
            <Col className="m-4 text-center ">
              <div className="rating-votee">
                <Col>
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
            <p className="single-page-description ">
              {singleProduct.description}
            </p>
            <Col className="text-center m-3">
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
