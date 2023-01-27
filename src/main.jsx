import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "flowbite";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routes";
import 'tw-elements';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
