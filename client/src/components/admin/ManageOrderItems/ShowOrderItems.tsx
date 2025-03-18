import React, { useState } from "react";
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
import OrderItemQuantityUpdater from "./OrderQuantityUpdater";
import { updateOrderItem } from "../../../services/orderItemsService/updateOrderItems";
import { IOrderItem } from "../../../models/IOrderItem";
import DeleteOrderItem from "./DeleteOrderItem";
import { ManageOrderItemsContainer } from "../../styled/styledAdmin/orderdetails/ManageOrderItems";

const ShowOrderItems = () => {
  const { id } = useParams<{ id: string }>();
  const { order, setOrder } = useOrder(Number(id));
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  if (!order) {
    return <div>Loading order details...</div>;
  }

  const handleIncrement = (itemId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || getInitialQuantity(itemId)) + 1,
    }));
  };

  const handleDecrement = (itemId: number) => {
    setQuantities((prev) => {
      const currentQty = prev[itemId] ?? getInitialQuantity(itemId);
      return {
        ...prev,
        [itemId]: currentQty > 1 ? currentQty - 1 : 1,
      };
    });
  };

  const handleUpdateQuantity = async (item: IOrderItem) => {
    const newQuantity = quantities[item.id] ?? item.quantity;
    const updatedItem: IOrderItem = { ...item, quantity: newQuantity };

    try {
      const updated = await updateOrderItem(item.id, updatedItem);

      const updatedItems = order.order_items.map((i) =>
        i.id === updated.id ? updated : i
      );
      setOrder({ ...order, order_items: updatedItems });

      console.log("Quantity updated for item:", updated);
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  const getInitialQuantity = (itemId: number) => {
    const item = order.order_items.find((i) => i.id === itemId);
    return item ? item.quantity : 1;
  };

  const updatedTotalPrice = order.order_items.reduce((total, item) => {
    const quantity = quantities[item.id] ?? item.quantity;
    return total + quantity * item.unit_price;
  }, 0);

  const onDeleteOrder = (id: number) => {
    setOrder((prev) => {
      if (!prev) return prev;

      const updatedItems = prev.order_items.filter((item) => item.id !== id);

      return {
        ...prev,
        order_items: updatedItems,
        total_price: updatedItems.reduce(
          (total, item) => total + item.quantity * item.unit_price,
          0
        ),
      };
    });
  };

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
            <ItemParagraph>
              Quantity: {quantities[item.id] ?? item.quantity}
            </ItemParagraph>
            <ItemParagraph>
              {" "}
              Price: {(quantities[item.id] ?? item.quantity) *
                item.unit_price}{" "}
              kr
            </ItemParagraph>
            <ManageOrderItemsContainer>
              <OrderItemQuantityUpdater
                quantity={quantities[item.id] ?? item.quantity}
                onIncrement={() => handleIncrement(item.id)}
                onDecrement={() => handleDecrement(item.id)}
                onUpdateQuantity={() => handleUpdateQuantity(item)}
              />
              <DeleteOrderItem id={item.id ?? 0} onDelete={onDeleteOrder} />
            </ManageOrderItemsContainer>
          </OrderItem>
        ))}
      </OrderItemsList>
      <ItemParagraph>totalt pris: {updatedTotalPrice} </ItemParagraph>
    </OrderDetailsContainer>
  );
};

export default ShowOrderItems;
