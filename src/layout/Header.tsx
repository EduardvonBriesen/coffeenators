import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CupIcon from "../assets/CupIcon";

const HeaderContainer = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100px;
  padding: 0 10%;
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
        <StyledLink to="/team">Team</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/map">Map</StyledLink>
      </div>
    </HeaderContainer>
  );
}

export default Header;
