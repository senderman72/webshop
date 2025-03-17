import React, { useState } from "react";
import useOrders from "../../../hooks/useOrders";
import {
  CustomersWrapper,
  CustomerList,
  CustomerCard,
  StyledCustomerInput,
} from "../../styled/styledAdmin/customerStyled/StyledCustomers";

import { IOrder } from "../../../models/IOrder";
import { StyledEditButton } from "../../styled/styledAdmin/customerStyled/UpdateCustomer";

import SaveProduct from "../manageProducts/SaveProduct";
import DeleteOrder from "./DeleteOrder";

const ShowOrders = () => {
  const { orders, setOrders } = useOrders();
  const [editingOrderId, setEditingOrderId] = useState<number | null>(null);
  const [editedOrder, setEditedOrder] = useState<IOrder | null>(null);

  const onDeleteOrder = (id: number) => {
    setOrders((prev) => prev?.filter((order) => order.id !== id));

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      field: keyof IOrder
    ) => {
      if (editedOrder) {
        setEditedOrder({
          ...editedOrder,
          [field]: e.target.value,
        });
      }
    };
  };

  return (
    <CustomersWrapper>
      <CustomerList>
        {orders?.map((orders) => {
          const isEditing = editingOrderId === orders.id;
          return (
            <CustomerCard key={orders.id}>
              <h5>id:</h5>
              <StyledCustomerInput type="number" value={orders.id} disabled />

              <h5>Förnamn: </h5>
              <StyledCustomerInput
                type="text"
                value={orders.customer_firstname}
                disabled
              />
              <h5>Efternamn: </h5>
              <StyledCustomerInput
                type="text"
                value={orders.customer_lastname}
                disabled
              />

              <h5>Betald?</h5>
              <StyledCustomerInput
                type="text"
                value={orders.payment_status}
                disabled
              />
              <h5> Totalt Pris:</h5>
              <StyledCustomerInput
                type="text"
                value={orders.total_price}
                disabled
              />
              <h5>Order status</h5>
              <StyledCustomerInput
                type="options"
                value={
                  isEditing ? editedOrder?.order_status : orders.order_status
                }
                disabled={!isEditing}
                onChange={(e) => handleInputChange(e, "order_status")}
              />

              {!isEditing ? (
                <StyledEditButton
                  onClick={() => {
                    setEditingOrderId(orders.id);
                    setEditedOrder({ ...orders });
                  }}
                >
                  Redigera
                </StyledEditButton>
              ) : (
                <SaveProduct product={editedOrder!} onSave={onSaveOrder} />
              )}
              <DeleteOrder onDelete={onDeleteOrder} id={orders.id ?? 0} />
            </CustomerCard>
          );
        })}
      </CustomerList>
    </CustomersWrapper>
  );
};

export default ShowOrders;
