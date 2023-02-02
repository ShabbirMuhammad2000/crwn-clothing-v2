import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CartProvider } from "./contexts/cart-dropdown.context";
import { store } from './store/store'


import "./index.scss";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
); 