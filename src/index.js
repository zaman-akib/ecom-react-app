import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import EcomApp from './components/ecom-app/EcomApp';
import CartState from './context/cart/CartState'
import RouteHandler from './Router/RouteHandler';

ReactDOM.render(
  <React.StrictMode>
    <CartState>
      <RouteHandler>
        <EcomApp />
      </RouteHandler>
    </CartState>
  </React.StrictMode>,
  document.getElementById('root')
);
