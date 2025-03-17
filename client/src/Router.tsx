import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Layout from "./Layout";
import Products from "./pages/Products";

import ProductDescription from "./components/products/ProductDescription";
import AdminLayout from "./AdminLayout";
import ShowCustomers from "./components/admin/ManageCustomers/ShowCustomers";
import ShowOrders from "./components/admin/ManageOrders/ShowOrders";
import ShowProducts from "./components/admin/manageProducts/ShowProducts";
import ShowOrderItems from "./components/admin/ManageOrderItems/ShowOrderItems";

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
        element: <AdminLayout />,
        children: [
          {
            path: "customers",
            element: <ShowCustomers />,
          },
          {
            path: "orders",
            element: <ShowOrders />,
          },
          {
            path: "orders/:id",
            element: <ShowOrderItems />,
          },
          {
            path: "products",
            element: <ShowProducts />,
          },
        ],
      },
    ],
  },
]);
