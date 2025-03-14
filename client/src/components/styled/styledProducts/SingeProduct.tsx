import styled from "styled-components";

export const SingleProductWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 2rem 0;
  margin-top: 7rem;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ProductImageWrapper = styled.div`
  width: 50%;

  img {
    width: 80%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const ProductInfoWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

export const SingleProductTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

export const SingleProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #055c9d;
`;

export const SingleDescriptionProduct = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

export const AddToCartWrapper = styled.div`
  margin-top: 1rem;
`;
