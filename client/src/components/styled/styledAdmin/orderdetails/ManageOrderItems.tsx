import styled from "styled-components";

export const ManageOrderItemsContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 10px;

  border-radius: 8px;

  width: 70%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 5px;
    gap: 0.5rem;
  }
`;
