import { NavLink } from "react-router";
import styled from "styled-components";
import { primaryColor } from "../GeneralStyles";

export const AdminNavigationWrapper = styled.nav`
  width: 12dvh;
  height: 100dvh;
  background-color: ${primaryColor};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

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
