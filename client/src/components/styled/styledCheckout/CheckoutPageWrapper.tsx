import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Product = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

export const ProductImage = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProductDetails = styled.div`
  flex-grow: 1;
`;

export const Total = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: right;
`;
