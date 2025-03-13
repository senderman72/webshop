import React from "react";
import Navigation from "./components/navigation/Navigation";
import { Outlet } from "react-router";
import AdminNavigation from "./components/navigation/AdminNavigation";
import { Main } from "./components/styled/layout/StyledLayout";

const AdminLayout = () => {
  return (
    <>
      <header>
        <AdminNavigation />
      </header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default AdminLayout;
