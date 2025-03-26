import styled from "styled-components";

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 70%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const Heading2 = styled.h2`
  color: #0e86d4;
  font-size: 2rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Heading3 = styled.h3`
  color: #055c9d;
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 5px 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const OrderItemsList = styled.ul`
  width: 100%;
  list-style-type: none;
`;

export const OrderItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 15px;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ItemParagraph = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 5px 0;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
