import React from 'react'
import NavBar from '../NavBar/NavBar';
import ProductCard from '../ProductCard/ProductCard'
import Cart from '../cart/Cart'

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
