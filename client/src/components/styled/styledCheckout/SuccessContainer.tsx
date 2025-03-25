import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #f4f4f4;
  font-family: "Arial", sans-serif;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: #0e86d4;
  margin-bottom: 20px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const ConfirmationMessage = styled.p`
  font-size: 1.2rem;
  color: #55a500;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;
