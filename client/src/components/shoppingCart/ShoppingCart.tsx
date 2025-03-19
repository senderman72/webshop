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
import { getStripeCheckoutEmbeddedUrl } from "../../services/stripe/stripe-embedded";

const ShoppingCart = ({ isOpen }: { isOpen: boolean }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Laddar...</div>;
  }

  const { cart } = cartContext;

  if (!isOpen) return null;

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

  const handleButtonClick = async () => {
    const session = await getStripeCheckoutEmbeddedUrl();
    window.location.href = session.url;
  };
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
          <p>Varukorgen är tom</p>
        </EmptyCartMessageWrapper>
      )}
      <div>
        <TotalPrice>Totalpris: {totalPrice} SEK</TotalPrice>
      </div>
      <AddToCartBtn onClick={handleButtonClick}>Checkout</AddToCartBtn>
    </CartWrapper>
  );
};

export default ShoppingCart;
