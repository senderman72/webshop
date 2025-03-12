import styled from "styled-components";
import { primaryColor } from "../GeneralStyles";

export const CartWrapper = styled.div`
  position: absolute;
  top: 11.9dvh;
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
`;

export const TotalPrice = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: white;
`;
