import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./main.css";

// creation of container
const container = document.getElementById("root");

// creation of a root
const root = ReactDOMClient.createRoot(container);

// App render
root.render(<App />);
