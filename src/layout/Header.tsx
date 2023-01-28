import { useLocation, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
  height: 10vh;
  padding: 0 10%;
  backdrop-filter: blur(15px);
  /* box-shadow: 0 0 88px rgba(0,0,0,0.75) inset; */
  font-size: 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(CupIcon)`
  height: 2rem;
  margin-right: 2rem;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: start;
  list-style-type: none;
`;

const StyledLink = styled(ScrollLink)`
  position: relative;
  display: block;
  cursor: default;
  color: ${(props) => props.theme.colors.dark};
  text-decoration: none;
  margin: 0 1rem;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    top: 100%;
    left: 0;
    background: ${(props) => props.theme.colors.primary};
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: right;
  }

  &.active::after,
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

// Sorry, not pretty
const StyledRouterLink = styled(RouterLink)`
  position: relative;
  display: block;
  cursor: default;
  color: ${(props) => props.theme.colors.dark};
  text-decoration: none;
  margin: 0 1rem;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    top: 100%;
    left: 0;
    background: ${(props) => props.theme.colors.primary};
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: right;
  }

  &.active::after,
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

function Header() {
  const location = useLocation();

  const mainLinks = [
    <StyledLink to="home" spy={true} smooth={true}>
      Home
    </StyledLink>,
    <StyledLink to="team" spy={true} smooth={true}>
      Team
    </StyledLink>,
    <StyledLink to="about" spy={true} smooth={true}>
      About
    </StyledLink>,
    <StyledLink to="map" spy={true} smooth={true}>
      Map
    </StyledLink>,
  ];

  const quizLinks = [<StyledRouterLink to="/">Home</StyledRouterLink>];

  return (
    <HeaderContainer>
      <Logo>
        <Icon />
        Coffeenators
      </Logo>
      <LinkList>
        {location.pathname === "/quiz" ? quizLinks : mainLinks}
      </LinkList>
    </HeaderContainer>
  );
}

export default Header;
