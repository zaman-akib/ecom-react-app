import React from 'react'
import NavBar from '../NavBar/NavBar';
import ProductCard from '../Product/ProductCard'
import Cart from '../Cart/Cart'

function EcomApp() {
  return (
    <div className="font-trebuchet">
      <NavBar />
      <Cart />
      <ProductCard />
    </div>
  );
}

export default EcomApp;
