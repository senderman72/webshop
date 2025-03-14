import { NavLink } from "react-router";
import styled from "styled-components";

export const AdminNavigationWrapper = styled.nav`
  width: 100px;
  height: 100dvh;
  background-color: black;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`;

export const AdminNavigationList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  list-style: none;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  .active {
    text-decoration: underline;
  }
`;

export const AdminH1 = styled.h1`
  font-size: 20px;
  color: white;
`;
