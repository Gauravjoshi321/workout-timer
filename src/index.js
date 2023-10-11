import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CalculatorProvider } from "./context/calculatorContext";
import { AppProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <CalculatorProvider>
        <App />
      </CalculatorProvider>
    </AppProvider>
  </React.StrictMode>
);
