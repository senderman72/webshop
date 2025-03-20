import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  max-width: 70%;
  width: 100%;
  margin: 2rem auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 15px;
    margin-left: 4rem;
  }
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

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const Inputbox = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
  }
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

export const FormError = styled.p`
  color: red;
  font-size: 14px;
  margin: 10px 0;
`;
