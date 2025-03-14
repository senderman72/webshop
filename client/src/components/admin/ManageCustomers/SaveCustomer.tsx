import React from "react";
import { CustomerUpdate } from "../../../models/ICustomer";
import { updateCustomer } from "../../../services/customerService/updateCustomer";
import { StyledSaveButton } from "../../styled/styledAdmin/customerStyled/UpdateCustomer";

interface SaveCustomerProps {
  customer: CustomerUpdate;
  onSave: (customer: CustomerUpdate) => void;
}

const SaveCustomer = ({ customer, onSave }: SaveCustomerProps) => {
  const handleSave = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (customer.id === null || customer.id === undefined) {
      console.error("Customer ID is invalid.");
      return;
    }

    console.log("Saving customer with data:", customer);

    try {
      await updateCustomer(customer.id, customer);

      onSave(customer);
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  return (
    <StyledSaveButton onClick={(e) => handleSave(e)}>Spara</StyledSaveButton>
  );
};

export default SaveCustomer;
