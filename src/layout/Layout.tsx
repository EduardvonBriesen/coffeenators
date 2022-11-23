import styled from "styled-components";
import Header from "./Header";

interface Props {
  children?: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
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
