import styled from "styled-components";

export const StyledSaveButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #218838;
  }

  &:active {
    background-color: #1e7e34;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledEditButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }
`;
