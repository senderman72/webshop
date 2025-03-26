import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  CartWrapper,
  CartItem,
  TotalPrice,
  EmptyCartMessageWrapper,
} from "../styled/styledCart/StyledCart";
import { AddToCartBtn } from "../styled/styledProducts/ProductCards";
import CartItemControls from "./CartItemControls";
import { Link } from "react-router";

const ShoppingCart = ({ isOpen }: { isOpen: boolean }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Laddar...</div>;
  }

  const { cart } = cartContext;

  if (!isOpen) return null;

  const handleCheckout = () => {
    const groupedCart = cart.reduce((acc, item) => {
      const existingItem = acc.find((group) => group.product.id === item.id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({ product: item, count: 1 });
      }

      return acc;
    }, [] as { product: (typeof cart)[0]; count: number }[]);

    const totalPrice = groupedCart.reduce((total, group) => {
      return total + group.product.price * group.count;
    }, 0);

    return { groupedCart, totalPrice };
  };

  const { groupedCart, totalPrice } = handleCheckout();

  return (
    <CartWrapper>
      {groupedCart.length > 0 ? (
        groupedCart.map((group) => (
          <CartItem key={group.product.id}>
            <img src={group.product.image} width={50} />
            <span>{group.product.name}</span>
            <span>{group.product.price * group.count} SEK</span>

            <span>Antal: {group.count}</span>
            <CartItemControls
              productId={group.product.id}
              currentCount={group.count}
            />
          </CartItem>
        ))
      ) : (
        <EmptyCartMessageWrapper>
          <h4>Varukorgen är tom</h4>
        </EmptyCartMessageWrapper>
      )}
      <div>
        <TotalPrice>Totalpris: {totalPrice} SEK</TotalPrice>
      </div>

      <Link to={"/checkout"}>
        <AddToCartBtn>Gå till kassan</AddToCartBtn>
      </Link>
    </CartWrapper>
  );
};
export default ShoppingCart;
