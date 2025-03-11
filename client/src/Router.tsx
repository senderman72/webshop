import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Layout from "./Layout";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import ManageProducts from "./components/admin/ManageProducts";
import ProductDescription from "./components/products/ProductDescription";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDescription />,
      },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "manage-products",
            element: <ManageProducts />,
          },
        ],
      },
    ],
  },
]);
