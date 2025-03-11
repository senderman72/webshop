import styled from "styled-components";

export const CartWrapper = styled.div`
  position: absolute;
  top: 12dvh;
  right: 0;
  width: 40rem;
  max-width: 100%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
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
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: black;
  }
`;
