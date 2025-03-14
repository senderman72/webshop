import React, { useState } from "react";
import useCustomer from "../../../hooks/useCustomer";
import {
  CustomerCard,
  CustomerList,
  CustomersWrapper,
  StyledCustomerInput,
} from "../../styled/styledAdmin/customerStyled/StyledCustomers";
import CreateCustomer from "./CreateCustomer";
import DeleteCustomer from "./DeleteCustomer";
import { ICustomer } from "../../../models/ICustomer";
import SaveCustomer from "./SaveCustomer";
import { StyledEditButton } from "../../styled/styledAdmin/customerStyled/UpdateCustomer";

const ShowCustomers = () => {
  const { customers, setCustomers } = useCustomer();
  const [editingCustomerId, setEditingCustomerId] = useState<number | null>(
    null
  );
  const [editedCustomer, setEditedCustomer] = useState<ICustomer | null>(null);

  const onDeleteCustomer = (id: number) => {
    setCustomers((prev) => prev?.filter((customer) => customer.id !== id));
  };

  const onAddCustomer = (newCustomer: ICustomer) => {
    setCustomers((prev) => (prev ? [...prev, newCustomer] : [newCustomer]));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ICustomer
  ) => {
    if (editedCustomer) {
      setEditedCustomer({
        ...editedCustomer,
        [field]: e.target.value,
      });
    }
  };

  const onSaveCustomer = (updatedCustomer: ICustomer) => {
    setCustomers((prevCustomers) =>
      prevCustomers?.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
    setEditedCustomer(updatedCustomer);
    setEditingCustomerId(null);
  };

  return (
    <CustomersWrapper>
      <CreateCustomer onAddCustomer={onAddCustomer} />
      <CustomerList>
        {customers?.map((customer) => {
          const isEditing = editingCustomerId === customer.id;
          return (
            <CustomerCard key={customer.id}>
              <StyledCustomerInput
                type="text"
                value={
                  isEditing ? editedCustomer?.firstname : customer.firstname
                }
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "firstname")}
              />
              <StyledCustomerInput
                type="text"
                value={isEditing ? editedCustomer?.lastname : customer.lastname}
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "lastname")}
              />
              <StyledCustomerInput
                type="text"
                value={isEditing ? editedCustomer?.phone : customer.phone}
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "phone")}
              />
              <StyledCustomerInput
                type="text"
                value={isEditing ? editedCustomer?.email : customer.email}
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "email")}
              />
              <StyledCustomerInput
                type="text"
                value={
                  isEditing
                    ? editedCustomer?.street_address
                    : customer.street_address
                }
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "street_address")}
              />
              <StyledCustomerInput
                type="text"
                value={
                  isEditing ? editedCustomer?.postal_code : customer.postal_code
                }
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "postal_code")}
              />
              {!isEditing ? (
                <StyledEditButton
                  onClick={() => {
                    setEditingCustomerId(customer.id);
                    setEditedCustomer({ ...customer });
                  }}
                >
                  Redigera
                </StyledEditButton>
              ) : (
                <SaveCustomer
                  customer={editedCustomer!}
                  onSave={onSaveCustomer}
                />
              )}
              <DeleteCustomer
                onDelete={onDeleteCustomer}
                id={customer.id ?? 0}
              />
            </CustomerCard>
          );
        })}
      </CustomerList>
    </CustomersWrapper>
  );
};

export default ShowCustomers;
