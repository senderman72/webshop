import React from "react";

import { Outlet } from "react-router";
import AdminNavigation from "./components/navigation/AdminNavigation";
import { Main } from "./components/styled/layout/StyledLayout";
import { AdminHeaderWrapper } from "./components/styled/styledAdmin/AdminHeader";

const AdminLayout = () => {
  return (
    <>
      <header>
        <AdminNavigation />
      </header>
      <AdminHeaderWrapper>
        <h1>Välj ett alternativ att administrera i menyn</h1>
      </AdminHeaderWrapper>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default AdminLayout;
