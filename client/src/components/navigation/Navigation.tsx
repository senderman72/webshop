import React, { useContext, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import {
  NavigationWrapper,
  NavigationList,
  NavigationLink,
} from "../styled/styledNavigation/NavigationWrapper";
import { CartIndicator } from "../styled/styledNavigation/CartIndicator";
import { CartContext } from "../../contexts/CartContext";
import ShoppingCart from "../shoppingCart/ShoppingCart";

const Navigation = () => {
  const cartContext = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  if (!cartContext) return null;
  const { cartCount } = cartContext;

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

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
      <div onClick={toggleCart}>
        <LuShoppingCart size={30} />
        {cartCount > 0 && <CartIndicator>{cartCount}</CartIndicator>}
      </div>
      {isCartOpen && <ShoppingCart isOpen={isCartOpen} />}
    </NavigationWrapper>
  );
};

export default Navigation;
