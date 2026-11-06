import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  const anyInStock = products.some((product) => product.inStock);

  if (!anyInStock) {
    return <p>No products in stock.</p>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;