import styled from "styled-components";

export const CustomersWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const CustomerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const CustomerCard = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  padding: 0.3rem;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  gap: 0.5rem;

  @media (max-width: 1024px) {
    width: 80%;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.8rem;
  }
`;

export const StyledCustomerInput = styled.input`
  background: #fff;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  color: #333;
  cursor: not-allowed;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;
