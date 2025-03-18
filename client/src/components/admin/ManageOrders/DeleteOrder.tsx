import React from "react";
import { DeleteButton } from "../../styled/styledAdmin/customerStyled/DeleteCustomerStyles";

import { deleteOrder } from "../../../services/orderService/deleteOrder";

interface DeleteOrderProps {
  id: number;
  onDelete: (id: number) => void;
}

const DeleteOrder = ({ id, onDelete }: DeleteOrderProps) => {
  const handleDelete = async () => {
    await deleteOrder(id);

    onDelete(id);
  };
  return <DeleteButton onClick={handleDelete}>Delete</DeleteButton>;
};

export default DeleteOrder;
