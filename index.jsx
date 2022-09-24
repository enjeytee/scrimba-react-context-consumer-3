import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContextProvider } from "./themeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
);