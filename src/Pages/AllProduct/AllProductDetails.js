import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllProductDetails = () => {
  const { ide } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    console.log(ide);
    fetch(`https://fakestoreapi.com/products/${ide}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [ide]);
  return <div>{inventory.id}</div>;
};

export default AllProductDetails;
