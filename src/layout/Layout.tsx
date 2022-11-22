import React from "react";
import styled from "styled-components";
import Header from "./Header";

interface Props {
  children?: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 10vw 0 10vw;
  background-color: ${(props) => props.theme.colors.background};
`;

function Layout({ children }: Props) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
}

export default Layout;
