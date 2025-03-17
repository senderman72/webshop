import React from "react";
import { DeleteButton } from "../../styled/styledAdmin/customerStyled/DeleteCustomerStyles";

import { deleteOrder } from "../../../services/orderService/deleteOrder";

interface DeleteOrderProps {
  id: number;
  onDelete: (id: number) => void;
}

const DeleteOrder = ({ id, onDelete }: DeleteOrderProps) => {
  const handleDelete = async () => {
    const success = await deleteOrder(id);
    if (success) {
      console.log("Produkten togs bort från databasen");
      onDelete(id);
    } else {
      console.error("Misslyckades med att ta bort produkten");
    }
  };
  return <DeleteButton onClick={handleDelete}>Delete</DeleteButton>;
};

export default DeleteOrder;
