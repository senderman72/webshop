import React from "react";
import { StyledSaveButton } from "../../styled/styledAdmin/customerStyled/UpdateCustomer";
import { updateOrder } from "../../../services/orderService/updateOrder";
import { IOrder } from "../../../models/IOrder";

interface UpdateOrderProps {
  order: IOrder;
  onSave: (order: IOrder) => void;
}

const UpdateOrder = ({ order, onSave }: UpdateOrderProps) => {
  const handleSave = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const updatedOrderStatus = {
        payment_status: order.payment_status ?? "pending",
        payment_id: order.payment_id ?? "",
        order_status: order.order_status,
      };

      await updateOrder(order.id!, updatedOrderStatus);

      onSave(order);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return <StyledSaveButton onClick={handleSave}>Spara</StyledSaveButton>;
};

export default UpdateOrder;
