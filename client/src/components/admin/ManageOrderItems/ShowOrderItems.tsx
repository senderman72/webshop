import useOrder from "../../../hooks/useOrder";
import { useParams } from "react-router";
import {
  Heading2,
  Heading3,
  ItemParagraph,
  OrderDetailsContainer,
  OrderItem,
  Paragraph,
} from "../../styled/styledAdmin/orderdetails/OrderDetails";
import React from "react";

const ShowOrderItems = () => {
  const { id } = useParams<{ id: string }>();
  const { order, setOrder } = useOrder(Number(id));

  if (!order || order.length === 0) {
    return <div>Loading order details...</div>;
  }

  return (
    <OrderDetailsContainer>
      <OrderDetailsContainer>
        <Heading2>Order Details</Heading2>
        <Heading3>Customer Information</Heading3>
        <Paragraph>
          Name: {order.customer_firstname} {order.customer_lastname}
        </Paragraph>
        <Paragraph>Email: {order.customer_email}</Paragraph>
        <Paragraph>Phone: {order.customer_phone}</Paragraph>
        <Paragraph>
          Address: {order.customer_street_address}, {order.customer_postal_code}
          ,{order.customer_city}, {order.customer_country}
        </Paragraph>
      </OrderDetailsContainer>
      <OrderDetailsContainer>
        <Heading3>Order Status</Heading3>
        <Paragraph>Status: {order.order_status}</Paragraph>
        <Paragraph>Payment Status: {order.payment_status}</Paragraph>
      </OrderDetailsContainer>
      <Heading3>Order Items</Heading3>
      <OrderDetailsContainer>
        {order.order_items.map((item) => (
          <OrderItem key={item.id}>
            <Paragraph>Product: {item.product_name}</Paragraph>
            <Paragraph>quantity: {item.quantity}</Paragraph>
            <Paragraph>Price: {order.total_price} kr</Paragraph>
          </OrderItem>
        ))}
      </OrderDetailsContainer>

      <Heading3>Totalt pris: {order.total_price} kr</Heading3>
    </OrderDetailsContainer>
  );
};

export default ShowOrderItems;
