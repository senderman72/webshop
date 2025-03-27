import styled from "styled-components";

export const SuccessContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #f4f4f4;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: #0e86d4;
  margin-bottom: 20px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  line-height: 1.6;
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const BookingParagraph = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.2rem;
  color: #333;
  overflow-wrap: break-word;
  text-align: center;
  max-width: 100%;
  margin-bottom: 20px;
`;

export const ConfirmationMessage = styled.p`
  font-size: 1.2rem;
  color: #55a500;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

export const SucessOrderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;
`;

export const SuccessOrderItem = styled.div`
  display: flex;

  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const SuccessItemParagraph = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 4px 0;
  color: #003060;
`;

export const SuccessTotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  color: #003060;
  text-align: center;
`;
