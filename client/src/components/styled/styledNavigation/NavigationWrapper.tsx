import { NavLink } from "react-router";
import styled from "styled-components";
import { primaryColor } from "../GeneralStyles";

export const NavigationWrapper = styled.nav`
  width: 100%;
  height: 12dvh;
  background-color: ${primaryColor};
  padding: 0 2rem;
  display: flex;
  align-items: center;
`;

export const NavigationList = styled.ul`
  width: 100%;
  display: flex;
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
