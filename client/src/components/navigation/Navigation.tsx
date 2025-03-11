import React, { useContext } from "react";
import { LuShoppingCart } from "react-icons/lu";
import {
  NavigationWrapper,
  NavigationList,
  NavigationLink,
} from "../styled/styledNavigation/NavigationWrapper";
import { CartIndicator } from "../styled/styledNavigation/CartIndicator";
import { CartContext } from "../../contexts/CartContext";

const Navigation = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { cartCount } = cartContext;

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
      <LuShoppingCart size={30} />
      {cartCount > 0 && <CartIndicator>{cartCount}</CartIndicator>}
    </NavigationWrapper>
  );
};

export default Navigation;
