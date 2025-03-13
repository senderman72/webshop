import React from "react";

import { NavigationLink } from "../styled/styledNavigation/NavigationWrapper";
import {
  AdminH1,
  AdminNavigationList,
  AdminNavigationWrapper,
} from "../styled/styledNavigation/StyledAdminNavigation";

const AdminNavigation = () => {
  return (
    <AdminNavigationWrapper>
      <AdminH1>Admin</AdminH1>
      <AdminNavigationList>
        <li>
          <NavigationLink to="customers">customers</NavigationLink>
        </li>
        <li>
          <NavigationLink to="orders">orders</NavigationLink>
        </li>
        <li>
          <NavigationLink to="products">products</NavigationLink>
        </li>
      </AdminNavigationList>
    </AdminNavigationWrapper>
  );
};

export default AdminNavigation;
