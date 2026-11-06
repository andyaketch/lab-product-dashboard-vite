import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  // TODO: Define initial product data

  // TODO: Implement state to manage filtering

  // TODO: Implement logic to filter products based on availability

  return (
    <div>
      <h1>Product Dashboard</h1>
      <h1>key={product.id}</h1>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default App;
