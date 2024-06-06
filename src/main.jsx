import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./assets/main.scss";
import CardState from "./context/CardState.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        {/* <CardState> */}
        <App />
        {/* </CardState> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
