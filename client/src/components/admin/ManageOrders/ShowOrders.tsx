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

import DeleteOrder from "./DeleteOrder";
import UpdateOrder from "./UpdateOrder";
import { StyledLink } from "../../styled/styledProducts/ProductCards";

const ShowOrders = () => {
  const { orders, setOrders } = useOrders();
  const [editingOrderId, setEditingOrderId] = useState<number | null>(null);
  const [editedOrder, setEditedOrder] = useState<IOrder | null>(null);

  console.log(orders);

  const onDeleteOrder = (id: number) => {
    setOrders((prev) => prev?.filter((order) => order.id !== id));
  };

  const handleOrderStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedOrder) {
      setEditedOrder({
        ...editedOrder,
        order_status: e.target.value,
      });
    }
  };

  const onSaveOrder = (updated: IOrder) => {
    setOrders((prev) =>
      prev?.map((order) =>
        order.id === updated.id
          ? { ...order, order_status: updated.order_status }
          : order
      )
    );
    setEditingOrderId(null);
    setEditedOrder(null);
  };

  return (
    <CustomersWrapper>
      <CustomerList>
        {orders?.map((order) => {
          const isEditing = editingOrderId === order.id;
          return (
            <CustomerCard key={order.id}>
              <h5>id:</h5>
              <StyledCustomerInput type="number" value={order.id} disabled />

              <h5>Förnamn: </h5>
              <StyledCustomerInput
                type="text"
                value={order.customer_firstname}
                disabled
              />
              <h5>Efternamn: </h5>
              <StyledCustomerInput
                type="text"
                value={order.customer_lastname}
                disabled
              />

              <h5>Betald?</h5>
              <StyledCustomerInput
                type="text"
                value={order.payment_status}
                disabled
              />
              <h5> Totalt Pris:</h5>
              <StyledCustomerInput
                type="text"
                value={order.total_price}
                disabled
              />
              <h5>Order status</h5>
              <StyledCustomerInput
                type="text"
                value={
                  isEditing ? editedOrder?.order_status : order.order_status
                }
                disabled={!isEditing}
                onChange={handleOrderStatusChange}
              />

              {!isEditing ? (
                <StyledEditButton
                  onClick={() => {
                    setEditingOrderId(order.id);
                    setEditedOrder({ ...order });
                  }}
                >
                  Redigera
                </StyledEditButton>
              ) : (
                <UpdateOrder order={editedOrder!} onSave={onSaveOrder} />
              )}
              <DeleteOrder onDelete={onDeleteOrder} id={order.id ?? 0} />

              <StyledLink to={`${order.id}`}>mer info</StyledLink>
            </CustomerCard>
          );
        })}
      </CustomerList>
    </CustomersWrapper>
  );
};

export default ShowOrders;
