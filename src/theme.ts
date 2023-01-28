import styled from "styled-components";

export const theme = {
  colors: {
    primary: "#E94C37",
    secondary: "#94724A",
    dark: "#272727",
    background: { main: "#F2ECDD", dark: "#F3BEBE" },
    scale: {
      min: "#1A6079",
      zero: "#e5e5e5",
      max: "#A81F0D",
      coffee: {
        min: "#2F435A",
        zero: "#e5e5e5",
        max: "#A47551",
      },
      tea: {
        min: "#1A6079",
        zero: "#e5e5e5",
        max: "#478C5C",
      },
      cocoa: {
        min: "#2F435A",
        zero: "#e5e5e5",
        max: "#AB6B51",
      },
    },
  },
};

export const Button = styled.button`
  font-weight: 400;
  font-size: 3vh;
  line-height: 5vh;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  margin: 0 1vw 0 0;
  padding: 1vh 2vh;
  min-width: 5vw;
  border-radius: 4vh;
  background-color: transparent;
  border: 3px solid ${(props) => props.theme.colors.primary};

  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background.main};
  }
`;
