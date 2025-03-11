import { RouterProvider } from "react-router";
import "./App.css";
import React from "react";
import { router } from "./Router";
import { CartProvider } from "./providers/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
