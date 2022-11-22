import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CupIcon from "../assets/CupIcon";

const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;
  padding: 2rem 0 2rem 0;
  background-color: ${(props) => props.theme.colors.background};

  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.dark};
`;

const Icon = styled(CupIcon)`
  height: 42px;
  margin-right: 20px;
`;

const StyledLink = styled(NavLink)`
  margin: 0 10px;
  color: ${(props) => props.theme.colors.dark};
  text-decoration: none;
  &.active {
    color: ${(props) => props.theme.colors.primary};
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Icon />
        Caffeinators
      </Logo>
      <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/map">Map</StyledLink>
      </div>
    </HeaderContainer>
  );
}

export default Header;
