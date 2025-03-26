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
import EmptyCart from "./EmptyCart";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext) ?? { cart: [] };
  const [customerData, setCustomerData] = useState<ICustomer | null>(null);
  const [orderId, setOrderId] = useState<number | null>(null);

  useEffect(() => {
    if (orderId) {
      document
        .getElementById("checkout")
        ?.style.setProperty("display", "block");
    }
  }, [orderId]);

  if (!cart.length)
    return (
      <>
        <EmptyCart />
      </>
    );

  const groupedCart = cart.reduce((acc, item) => {
    const group = acc.get(item.id) || { product: item, count: 0 };
    group.count += 1;
    acc.set(item.id, group);
    return acc;
  }, new Map<number, { product: (typeof cart)[number]; count: number }>());

  const totalPrice = Array.from(groupedCart.values()).reduce(
    (total, { product, count }) => total + product.price * count,
    0
  );

  const onProceedToCheckout = async (customerData: ICustomer) => {
    setCustomerData(customerData);

    try {
      const orderItems = Array.from(groupedCart.values()).map(
        ({ product, count }) => ({
          product_id: product.id,
          product_name: product.name,
          quantity: count,
          unit_price: product.price,
        })
      );

      const orderResponse = await placeOrder(customerData.id, orderItems);
      if (orderResponse?.order_id) setOrderId(orderResponse.order_id);
      else throw new Error("Missing order ID in response");
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <CheckoutContainer>
      <h2>Kassa</h2>
      <StyledLink to="/products">Tillbaka</StyledLink>
      <ProductList>
        {Array.from(groupedCart.values()).map(({ product, count }) => (
          <Product key={product.id}>
            <ProductImage>
              <img src={product.image} alt={product.name} />
            </ProductImage>
            <ProductDetails>
              <h3>{product.name}</h3>
              <p>Price: {product.price * count} SEK</p>
              <p>Quantity: {count}</p>
            </ProductDetails>
            <CartItemControls productId={product.id} currentCount={count} />
          </Product>
        ))}
      </ProductList>
      <Total>
        <h3>Total: {totalPrice} SEK</h3>
      </Total>
      <h2>Ange adressinformation</h2>
      <ProceedToCheckout onProceedToCheckout={onProceedToCheckout} />
      <div id="checkout" style={{ display: "none" }}>
        {orderId && (
          <StripeEmbedded
            cart={Array.from(groupedCart.values())}
            orderId={orderId}
          />
        )}
      </div>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
