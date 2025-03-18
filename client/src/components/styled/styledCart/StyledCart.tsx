import styled from "styled-components";
import { primaryColor } from "../GeneralStyles";

export const CartWrapper = styled.div`
  position: absolute;
  top: 11dvh;
  right: 0;
  width: 40rem;
  max-width: 100%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  background-color: ${primaryColor};
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
    top: 9dvh;
    right: 0;
    border-radius: 0;
    padding: 1rem;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 65px;
    height: 65px;
    object-fit: contain;
  }

  span {
    font-size: 15px;
    font-weight: 500;
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      font-size: 14px;
    }

    img {
      width: 55px;
      height: 55px;
    }
  }
`;

export const TotalPrice = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const CartItemControlsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.3rem;
  }
`;

export const EmptyCartMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border: 1px dashed #ccc;
  border-radius: 8px;
  margin: 1rem;
  color: #555;
  font-size: 1.2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
    margin: 0.5rem;
  }
`;
