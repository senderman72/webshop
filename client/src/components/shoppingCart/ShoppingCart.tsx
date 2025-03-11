import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartWrapper, CartItem } from "../styled/styledCart/StyledCart";
import { AddToCartBtn } from "../styled/styledProducts/ProductCards";

const ShoppingCart = ({ isOpen }: { isOpen: boolean }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Laddar...</div>;
  }

  const { cart, updateItemCount } = cartContext;

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

  const handleIncrease = (productId: number) => {
    if (productId !== null) {
      updateItemCount(productId, 1);
    }
  };

  const handleDecrease = (productId: number) => {
    if (productId !== null) {
      updateItemCount(productId, -1);
    }
  };

  return (
    <CartWrapper>
      {groupedCart.length > 0 ? (
        groupedCart.map((group) => (
          <CartItem key={group.product.id}>
            <img
              src={group.product.image}
              alt={group.product.name}
              width={50}
            />
            <span>{group.product.name}</span>
            <span>{group.product.price} SEK</span>
            <span>Antal: {group.count}</span>
            <div>
              <button onClick={() => handleDecrease(group.product.id)}>
                -
              </button>
              <span>Antal: {group.count}</span>
              <button onClick={() => handleIncrease(group.product.id)}>
                +
              </button>
            </div>
          </CartItem>
        ))
      ) : (
        <p>Varukorgen är tom</p>
      )}
      <AddToCartBtn>Checkout</AddToCartBtn>
    </CartWrapper>
  );
};

export default ShoppingCart;
