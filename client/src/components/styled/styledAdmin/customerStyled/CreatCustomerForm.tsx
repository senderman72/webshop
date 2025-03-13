import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: 12px;
  max-width: 400px;
  width: 100%;
  margin: 2rem auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  color: black;
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Inputbox = styled.div`
  width: 100%;
  display: flex;
`;

export const Button = styled.button`
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #0056b3;
  }
`;
