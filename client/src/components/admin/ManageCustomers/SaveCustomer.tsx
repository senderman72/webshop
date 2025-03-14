import React from "react";
import { CustomerUpdate, ICustomer } from "../../../models/ICustomer";
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
      const response = await updateCustomer(customer.id, customer);
      if (response?.message === "Customer updated") {
        console.log("Calling onSave function");
        onSave(customer);
      } else {
        console.error("Failed to update customer:", response?.message);
      }
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  return (
    <StyledSaveButton onClick={(e) => handleSave(e)}>Spara</StyledSaveButton>
  );
};

export default SaveCustomer;
