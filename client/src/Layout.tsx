import React from "react";
import { Outlet } from "react-router";
import Navigation from "./components/navigation/Navigation";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Denna kanske innte ens kommer att behövas</footer>
    </>
  );
};

export default Layout;
