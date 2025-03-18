import styled from "styled-components";

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;

  padding: 10px 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }

  &:active {
    background-color: #a93226;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;
