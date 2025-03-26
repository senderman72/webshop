import React, { useEffect, useState } from "react";
import {
  Heading,
  Paragraph,
  SuccessContainer,
  SuccessItemParagraph,
  SuccessOrderItem,
  SuccessTotalPrice,
  SucessOrderListContainer,
} from "../styled/styledCheckout/SuccessContainer";
import { StyledLink } from "../styled/styledProducts/ProductCards";
import { useParams } from "react-router";

import { getOrderByPaymentId } from "../../services/orderService/getOrderByPaymentId";
import { IOrder } from "../../models/IOrder";

const SuccessPage = () => {
  const { paymentId } = useParams<string>();
  const [order, setOrder] = useState<IOrder | null>();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrderByPaymentId(paymentId);
        console.log(data);
        setOrder(data);
      } catch {
        console.log("Kunde inte hämta ordern.");
      }
    };
    fetchOrder();
  }, [paymentId]);

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
      <Heading>Order Detaljer</Heading>
      <SucessOrderListContainer>
        {order?.order_items.map((item) => (
          <SuccessOrderItem key={item.id}>
            <SuccessItemParagraph>
              Produkt: {item.product_name}
            </SuccessItemParagraph>
            <SuccessItemParagraph>Antal: {item.quantity}</SuccessItemParagraph>
            <SuccessItemParagraph>Order ID: {item.id}</SuccessItemParagraph>
            <SuccessItemParagraph>
              Pris: {item.unit_price} kr
            </SuccessItemParagraph>
          </SuccessOrderItem>
        ))}
      </SucessOrderListContainer>
      <SuccessTotalPrice>
        Totalt pris: {order?.total_price} kr
      </SuccessTotalPrice>
      <StyledLink to="/">Tillbaka</StyledLink>
    </SuccessContainer>
  );
};

export default SuccessPage;
