import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ProductDetails = ({ items }) => {
  const { title, image, description, price, category, rating } = items;
  const vag = items.description;
  const aslo = vag.slice(0, 150);

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
          <Button variant="primary">See Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
