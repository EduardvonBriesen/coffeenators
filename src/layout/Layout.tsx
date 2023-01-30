import { useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
import useScrollSnap from "react-use-scroll-snap";

interface Props {
  children?: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Layout({ children }: Props) {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 10 });
  return (
    <LayoutContainer>
      <Header />
      <section ref={scrollRef}>{children}</section>
    </LayoutContainer>
  );
}

export default Layout;
