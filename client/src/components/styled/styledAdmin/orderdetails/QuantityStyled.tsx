import styled from "styled-components";

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

export const QuantityButton = styled.button`
  background-color: #0e86d4;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #055c9d;
  }

  &:disabled {
    background-color: #a5a5a5;
    cursor: not-allowed;
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #003060;
`;

export const UpdateButton = styled.button`
  background-color: #68bbe3;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0e86d4;
  }
`;
