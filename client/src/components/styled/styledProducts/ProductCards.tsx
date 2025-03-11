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

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: #0e86d4;
  font-size: 1.2rem;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #0e86d4;
  font-weight: bold;
`;
