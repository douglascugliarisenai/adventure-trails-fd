/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Trilhas from "./pages/Trilhas";
import Cadastro from "./pages/Cadastro";
import App from "./App";

const routers = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  children: [
   {
    path: "/",
    element: <Home />
   },
   {
    path: "/trilhas",
    element: <Trilhas />
   },
   {
    path: "/cadastro",
    element: <Cadastro />
   }
  ]
 }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={routers}></RouterProvider>
);
