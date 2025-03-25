import React from "react";
import {
  Heading,
  Paragraph,
  SuccessContainer,
} from "../styled/styledCheckout/SuccessContainer";
import { StyledLink } from "../styled/styledProducts/ProductCards";

const SuccessPage = () => {
  return (
    <SuccessContainer>
      <Heading>Tack för din beställning!</Heading>
      <Paragraph>
        Din betalning har gått igenom och din beställning är nu behandlad.
      </Paragraph>
      <Paragraph>
        Du kommer att få en bekräftelse via e-post inom kort.
      </Paragraph>
      <Paragraph>Tack för att du handlar hos oss!</Paragraph>
      <StyledLink to="/">Tillbaka</StyledLink>
    </SuccessContainer>
  );
};

export default SuccessPage;
