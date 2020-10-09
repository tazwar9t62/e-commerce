import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productKey } = useParams();
  let [product, setProduct] = useState({});
  useEffect(() => {
    document.title = "Product details";
    fetch("http://localhost:5000/product/" + productKey)
      .then((res) => res.json())
      .then((result) => setProduct(result));
  }, [productKey]);

  return (
    <div>
      <h1>Your Product Details.</h1>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
