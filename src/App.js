import React from "react";
import ProductList from "./components/ProductList";

const App = () => {
  // FIXED: the product array moved here from ProductList (Step 2)
  const products = [
    { id: 1, name: "Wireless Mouse", price: 25.99, inStock: true },
    { id: 2, name: "Mechanical Keyboard", price: 79.99, inStock: true },
    { id: 3, name: "USB-C Hub", price: 34.5, inStock: false },
    { id: 4, name: "Laptop Stand", price: 45.0, inStock: true },
    { id: 5, name: "Webcam", price: 59.99, inStock: false },
  ];

  return (
    <div>
      <h1>Product Dashboard</h1>
      {/* FIXED: the data is passed down as a prop */}
      <ProductList products={products} />
    </div>
  );
};

export default App;