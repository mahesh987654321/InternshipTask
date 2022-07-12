import React, { createContext, useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import "./Product.css";
import { useNavigate, useParams } from "react-router-dom";
export const ContextApi = createContext();
const Products = () => {
  const [product, setProduct] = useState([]);
  const id = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handelClick = (product) => {
    // e.preventDefault();
    console.log(product);
    // navigate(`/products:${id}`);
  };

  //   console.log(ContextApi.Provider);
  return (
    <ContextApi.Provider value={handelClick}>
      <div className="product container">
        {product.map((items) => (
          <ProductDetails
            key={product.id}
            items={items}
            handelClick={handelClick}
          />
        ))}
      </div>
    </ContextApi.Provider>
  );
};

export default Products;
