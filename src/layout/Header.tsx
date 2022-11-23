import { Link } from "react-scroll";
import styled from "styled-components";
import CupIcon from "../assets/CupIcon";

const HeaderContainer = styled.nav`
  position: fixed;
  z-index: 1;
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

const StyledLink = styled(Link)`
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
        <StyledLink to="home" spy={true} smooth={true}>
          Home
        </StyledLink>
        <StyledLink to="team" spy={true} smooth={true}>
          Team
        </StyledLink>
        <StyledLink to="about" spy={true} smooth={true}>
          About
        </StyledLink>
        <StyledLink to="map" spy={true} smooth={true}>
          Map
        </StyledLink>
      </div>
    </HeaderContainer>
  );
}

export default Header;
