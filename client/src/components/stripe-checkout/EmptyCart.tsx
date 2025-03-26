import React from "react";
import { EmptyCartMessageWrapper } from "../styled/styledCart/StyledCart";
import { Heading, Paragraph } from "../styled/styledCheckout/SuccessContainer";
import { StyledLink } from "../styled/styledProducts/ProductCards";

const EmptyCart = () => {
  return (
    <EmptyCartMessageWrapper>
      <Heading>varukorgen är tom</Heading>
      <Paragraph>
        utforska sortimentet och lägg till produkter i din varukorg
      </Paragraph>
      <StyledLink to="/products">till produktsidan</StyledLink>
    </EmptyCartMessageWrapper>
  );
};

export default EmptyCart;
