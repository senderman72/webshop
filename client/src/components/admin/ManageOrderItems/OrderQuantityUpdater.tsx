import React from "react";
import {
  QuantityButton,
  QuantityContainer,
  QuantityDisplay,
  UpdateButton,
} from "../../styled/styledAdmin/orderdetails/QuantityStyled";

interface OrderItemQuantityUpdaterProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onUpdateQuantity: () => void;
}

const OrderItemQuantityUpdater: React.FC<OrderItemQuantityUpdaterProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  onUpdateQuantity,
}) => {
  return (
    <QuantityContainer>
      <QuantityButton onClick={onDecrement}>-</QuantityButton>
      <QuantityDisplay>{quantity}</QuantityDisplay>
      <QuantityButton onClick={onIncrement}>+</QuantityButton>
      <UpdateButton onClick={onUpdateQuantity}>Uppdatera antal</UpdateButton>
    </QuantityContainer>
  );
};

export default OrderItemQuantityUpdater;
