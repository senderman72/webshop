import React from "react";
import useOrder from "../../../hooks/useOrder";
import { useParams } from "react-router";
import {
  Heading2,
  Heading3,
  ItemParagraph,
  OrderDetailsContainer,
  OrderItem,
  OrderItemsList,
  Paragraph,
} from "../../styled/styledAdmin/orderdetails/OrderDetails";

const ShowOrderItems = () => {
  const { id } = useParams<{ id: string }>();
  const { order } = useOrder(Number(id));

  if (!order) {
    return <div>Loading order details...</div>;
  }

  return (
    <OrderDetailsContainer>
      <Heading2>Order Details</Heading2>
      <Heading3>Customer Information</Heading3>
      <Paragraph>Name: {order.customer_firstname}</Paragraph>
      <Paragraph>Email: {order.customer_email}</Paragraph>
      <Paragraph>Phone: {order.customer_phone}</Paragraph>

      <Heading3>Order Items</Heading3>
      <OrderItemsList>
        {order.order_items.map((item) => (
          <OrderItem key={item.id}>
            <ItemParagraph>Product: {item.product_name}</ItemParagraph>
            <ItemParagraph>Quantity: {item.quantity}</ItemParagraph>
            <ItemParagraph>Price: {item.unit_price}</ItemParagraph>
          </OrderItem>
        ))}
      </OrderItemsList>
    </OrderDetailsContainer>
  );
};

export default ShowOrderItems;
