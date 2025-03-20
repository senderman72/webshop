import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  CheckoutContainer,
  Product,
  ProductDetails,
  ProductImage,
  ProductList,
  Total,
} from "../styled/styledCheckout/CheckoutPageWrapper";

import CartItemControls from "./CartItemControls";
import CreateCustomer from "../admin/ManageCustomers/CreateCustomer";
import StripeEmbedded from "../stripe-checkout/StripeEmbedded";

import { StyledLink } from "../styled/styledProducts/ProductCards";
import { getCustomerByEmail } from "../../services/customerService/getCustomerByEmail";
import { ICustomer } from "../../models/ICustomer";
import { createCustomer } from "../../services/customerService/createCustomer";
import { placeOrder } from "../../services/orderService/placeOrder";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <div>Varukorgen är tom</div>;
  }

  const handleCheckout = () => {
    const groupedCart = cart.reduce((acc, item) => {
      const existingItem = acc.find((group) => group.product.id === item.id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({ product: item, count: 1 });
      }

      return acc;
    }, [] as { product: (typeof cart)[0]; count: number }[]);

    const totalPrice = groupedCart.reduce((total, group) => {
      return total + group.product.price * group.count;
    }, 0);

    return { groupedCart, totalPrice };
  };

  const { groupedCart, totalPrice } = handleCheckout();
  const onProceedToCheckout = async (customer: ICustomer) => {
    try {
      const existingCustomer = await getCustomerByEmail(customer.email);
      const customerId = existingCustomer
        ? existingCustomer.id
        : (await createCustomer(customer)).id;
      await placeOrder(customerId, cart);
      return (
        <div id="checkout" style={{ display: "block" }}>
          <StripeEmbedded customerId={customerId} />
        </div>
      );
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <CheckoutContainer>
      <h2>Kassa</h2>

      <StyledLink to="/products">Tillbaka</StyledLink>

      <ProductList>
        {groupedCart.map((group) => (
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
      <CreateCustomer
        onProceedToCheckout={onProceedToCheckout}
        onAddCustomer={() => {
          const checkoutContainer = document.getElementById("checkout");
          if (checkoutContainer) {
            checkoutContainer.style.display = "block";
          }
        }}
      />

      <div id="checkout" style={{ display: "none" }}>
        <StripeEmbedded />
      </div>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
