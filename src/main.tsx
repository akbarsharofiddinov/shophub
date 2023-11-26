import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";

// Store
import { Provider } from "react-redux";
import { store } from "./app/store";

// AOS animation
import "aos/dist/aos.css";
import "aos/dist/aos.js";

// React notifications
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
