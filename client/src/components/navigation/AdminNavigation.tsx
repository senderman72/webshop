import React from "react";

import { NavigationLink } from "../styled/styledNavigation/NavigationWrapper";
import {
  AdminNavigationList,
  AdminNavigationWrapper,
} from "../styled/styledNavigation/StyledAdminNavigation";

const AdminNavigation = () => {
  return (
    <AdminNavigationWrapper>
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
