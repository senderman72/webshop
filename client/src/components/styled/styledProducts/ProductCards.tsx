import styled from "styled-components";

export const ProductCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;

  /* Responsiv design */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background-color: grey;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 20px;
`;
export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const ProductTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #fff;
  font-weight: bold;
`;

export const DescriptionProduct = styled.p`
  font-size: 0.9;
  color: #fff;
`;

export const AddToCartBtn = styled.button`
  background-color: #055c9d;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0e86d4;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 94, 157, 0.5);
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;
