import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import './Product.css'
const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="product container">
      {product.map((items) => (
        <ProductDetails key={product.id} items={items} />
      ))}
    </div>
  );
};

export default Products;
