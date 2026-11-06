import React from "react";
import ProductCard from "./ProductCard";

// FIXED: receives products as a prop instead of defining it here
function ProductList({ products }) {
  // FIXED: added the "no products in stock" check (Step 3)
  const anyInStock = products.some((product) => product.inStock);

  if (!anyInStock) {
    return <p>No products in stock.</p>;
  }

  return (
    // FIXED: wrapped in a fragment, since a bare {} can't sit directly in return
    <>
      {products.map((product) => (
        // FIXED: renders ProductCard instead of the raw <div>; key is on this element
        // FIXED: arrow function with () removes the extra return and brace-matching
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
} // FIXED: removed the stray ";" after the closing brace

export default ProductList;