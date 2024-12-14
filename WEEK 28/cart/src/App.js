import React from "react";
import { CartProvider } from "./content";
import ProductList from "./product";
import CartPage from "./cart";

const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <ProductList />
        <CartPage />
      </div>
    </CartProvider>
  );
};

export default App;
