import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { ContextApi } from "./Products";
const ProductDetails = ({ items }) => {
  const { title, image, description, price, category, rating, id } = items;
  const vag = items.description;
  const aslo = vag.slice(0, 150);
  const connect = useContext(ContextApi);
  const { ide } = useParams();
  const navigate = useNavigate();
  const handelClick = (ide) => {
    navigate(`/product/${ide}`);
  };
  return (
    <div>
      <Card style={{ width: "18rem", height: "105vh" }}>
        <div>
          <Card.Img style={{ height: "40vh" }} variant="top" src={image} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>
            <b>Price: $</b> {price}
          </Card.Text>
          <Card.Text>
            <b>Category:</b> {category}
          </Card.Text>
          <Card.Text>
            <b>Description:</b> {aslo}
          </Card.Text>
          <Button
            onClick={() => handelClick(id)}
            style={{ position: "absolute", bottom: "0" }}
            variant="primary"
          >
            See Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
