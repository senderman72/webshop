import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { DeleteButton } from "../styled/styledAdmin/customerStyled/DeleteCustomerStyles";
import { StyledSaveButton } from "../styled/styledAdmin/customerStyled/UpdateCustomer";
import { CartItemControlsDiv } from "../styled/styledCart/StyledCart";

interface CartItemControlsProps {
  productId: number;
  currentCount: number;
}

const CartItemControls = ({
  productId,
  currentCount,
}: CartItemControlsProps) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { addToCart, removeFromCart, cart } = cartContext;

  const product = cart.find((p) => p.id === productId);
  if (!product) return null;

  return (
    <CartItemControlsDiv>
      <StyledSaveButton onClick={() => addToCart(product)}>+</StyledSaveButton>
      {currentCount > 0 && (
        <DeleteButton onClick={() => removeFromCart(productId)}>-</DeleteButton>
      )}
    </CartItemControlsDiv>
  );
};

export default CartItemControls;
