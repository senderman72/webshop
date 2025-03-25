import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  CheckoutContainer,
  Product,
  ProductDetails,
  ProductImage,
  ProductList,
  Total,
} from "../styled/styledCheckout/CheckoutPageWrapper";

import CartItemControls from "../shoppingCart/CartItemControls";

import StripeEmbedded from "./StripeEmbedded";

import { StyledLink } from "../styled/styledProducts/ProductCards";

import ProceedToCheckout from "./ProceedToCheckout";
import { placeOrder } from "../../services/orderService/placeOrder";
import { ICustomer } from "../../models/ICustomer";

const CheckoutPage = () => {
  const cartContext = useContext(CartContext);
  const cart = cartContext?.cart;
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  const [orderId, setOrderId] = useState<number | null>(null);

  useEffect(() => {
    if (orderId) {
      const checkoutContainer = document.getElementById("checkout");
      if (checkoutContainer) {
        checkoutContainer.style.display = "block";
      }
    }
  }, [orderId]);

  if (cart?.length === 0) {
    return <div>Varukorgen är tom</div>;
  }

  const handleCheckout = () => {
    const groupedCart = cart?.reduce((acc, item) => {
      const existingItem = acc.find((group) => group.product.id === item.id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({ product: item, count: 1 });
      }

      return acc;
    }, [] as { product: (typeof cart)[0]; count: number }[]);

    const totalPrice = groupedCart?.reduce((total, group) => {
      return total + group.product.price * group.count;
    }, 0);

    return { groupedCart, totalPrice };
  };

  const { groupedCart, totalPrice } = handleCheckout();

  const onProceedToCheckout = async (customerData: ICustomer) => {
    if (!customerData || !customerData.id) {
      console.error("Customer is undefined or missing ID", customerData);
      return;
    }

    setCustomer(customerData);

    try {
      const orderItems =
        groupedCart?.map((item) => ({
          product_id: item.product.id,
          product_name: item.product.name,
          quantity: item.count,
          unit_price: item.product.price,
        })) ?? [];

      const orderResponse = await placeOrder(customerData.id, orderItems);

      if (orderResponse && orderResponse.order_id) {
        setOrderId(orderResponse.order_id);
        console.log("Order created with ID:", orderResponse.order_id);
      } else {
        throw new Error(`${orderId}missing in response.`);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <CheckoutContainer>
      <h2>Kassa</h2>

      <StyledLink to="/products">Tillbaka</StyledLink>

      <ProductList>
        {groupedCart?.map((group) => (
          <Product key={group.product.id}>
            <ProductImage>
              <img src={group.product.image} alt={group.product.name} />
            </ProductImage>
            <ProductDetails>
              <h3>{group.product.name}</h3>
              <p>Price: {group.product.price * group.count} SEK</p>
              <p>Quantity: {group.count}</p>
            </ProductDetails>
            <CartItemControls
              productId={group.product.id}
              currentCount={group.count}
            />
          </Product>
        ))}
      </ProductList>
      <Total>
        <h3>Total: {totalPrice} SEK</h3>
      </Total>
      <h2>Ange adressinformation</h2>

      <ProceedToCheckout onProceedToCheckout={onProceedToCheckout} />

      <div id="checkout" style={{ display: "none" }}>
        {orderId && <StripeEmbedded cart={groupedCart} orderId={orderId} />}
      </div>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
