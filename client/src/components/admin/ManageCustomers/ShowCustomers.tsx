import React from "react";
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

const ShowCustomers = () => {
  const { customers, setCustomers } = useCustomer();

  const onDeleteCustomer = (id: number) => {
    setCustomers((prev) => prev?.filter((customer) => customer.id !== id));
  };

  const onAddCustomer = (newCustomer: ICustomer) => {
    setCustomers((prev) => (prev ? [...prev, newCustomer] : [newCustomer]));
  };

  return (
    <CustomersWrapper>
      <CreateCustomer onAddCustomer={onAddCustomer} />
      <CustomerList>
        {customers?.map((customer) => {
          return (
            <CustomerCard key={customer.id}>
              <StyledCustomerInput
                type="text"
                value={customer.firstname}
                disabled
              />
              <StyledCustomerInput
                type="text"
                value={customer.lastname}
                disabled
              />
              <StyledCustomerInput
                type="text"
                value={customer.phone}
                disabled
              />
              <StyledCustomerInput
                type="text"
                value={customer.email}
                disabled
              />
              <StyledCustomerInput
                type="text"
                value={customer.street_address}
                disabled
              />
              <StyledCustomerInput
                type="text"
                value={customer.postal_code}
                disabled
              />
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
