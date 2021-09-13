import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import EcomApp from './components/ecom-app/EcomApp';
import CartState from './context/cart/CartState'

ReactDOM.render(
  <React.StrictMode>
    <CartState>
      <EcomApp />
    </CartState>
  </React.StrictMode>,
  document.getElementById('root')
);
