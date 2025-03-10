import React from "react";
import ReactDOM from "react-dom/client"; // Importing the `react-dom/client` for React 18
import App from "./App";
import "./index.css"; // ✅ Ensure this is imported

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
); // Use createRoot for React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
