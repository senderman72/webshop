import React from "react";
import { DeleteButton } from "../../styled/styledAdmin/customerStyled/DeleteCustomerStyles";
import { deleteOrderItems } from "../../../services/orderItemsService/deleteOrderItem";

interface DeleteOrderItemProps {
  id: number;
  onDelete: (id: number) => void;
}

const DeleteOrderItem = ({ id, onDelete }: DeleteOrderItemProps) => {
  const handleDelete = async () => {
    await deleteOrderItems(id);

    onDelete(id);
  };

  return <DeleteButton onClick={handleDelete}>Delete</DeleteButton>;
};

export default DeleteOrderItem;
