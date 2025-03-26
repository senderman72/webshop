import styled from "styled-components";
import { primaryColor } from "../GeneralStyles";
import { Link } from "react-router";

export const ProductCardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  place-content: center;
  gap: 1rem;
  padding: 0px 0.7rem;

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
  width: 100%;
  height: 95%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  opacity: 0.9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0rem 0.5rem;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
`;

export const ProductImageContainer = styled.div`
  display: flex;
  width: 80%;
  height: 50%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 90%;
  object-fit: contain;
  border-radius: 8px;
`;

export const ProductTitle = styled.h3`
  color: ${primaryColor};
  font-size: 1rem;
`;

export const ProductPrice = styled.p`
  font-size: 0.9rem;
  color: ${primaryColor};
  font-weight: bold;
`;

export const DescriptionProduct = styled.p`
  font-size: 0.9;
  color: ${primaryColor};
`;

export const AddToCartBtn = styled.button`
  background-color: #055c9d;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
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

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 18px;
  background-color: #68bbe3;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background-color: #4a9dc6;
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(100, 180, 220, 0.5);
  }
`;
