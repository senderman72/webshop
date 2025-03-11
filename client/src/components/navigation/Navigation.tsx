import React from "react";

import {
  NavigationWrapper,
  NavigationList,
  NavigationLink,
} from "../styled/styledNavigation/NavigationWrapper";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/products">Products</NavigationLink>
        </li>
        <li>
          <NavigationLink to="/admin">Admin</NavigationLink>
        </li>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
