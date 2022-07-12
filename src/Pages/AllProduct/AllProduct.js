import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllProductDetails from "./AllProductDetails";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const AllProduct = () => {
  const { ide } = useParams();

  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ide}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [ide]);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "6rem",
        marginBottom: "5rem",
      }}
    >
      <Card style={{ width: "30rem" }}>
        <Card.Header>{inventory.title}</Card.Header>
        <ListGroup variant="flush">
          <img src={inventory.image} alt="" />
          <ListGroup.Item>
            {" "}
            <b>Price $: </b> {inventory.price}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Category: </b>
            {inventory.category}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Rating: </b>
            {inventory.rating?.rate}*
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Price $</b>
            {inventory.rating?.count}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default AllProduct;
