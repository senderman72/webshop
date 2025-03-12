import React from "react";
import useCustomer from "../../../hooks/useCustomer";
import {
  CustomerCard,
  CustomerList,
  StyledCustomerInput,
} from "../../styled/styledAdmin/customerStyled/StyledCustomers";
import CreateCustomer from "./CreateCustomer";

const ShowCustomers = () => {
  const { customers } = useCustomer();

  console.log(customers);

  return (
    <>
      <CreateCustomer />
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
            </CustomerCard>
          );
        })}
      </CustomerList>
    </>
  );
};

export default ShowCustomers;
