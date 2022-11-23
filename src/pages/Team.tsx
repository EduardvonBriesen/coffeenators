import styled from "styled-components";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: ${(props) => props.theme.colors.background.dark};
  width: 100vw;
  height: 100vh;
  padding: 10%;
  box-sizing: border-box;
`;

const Headline = styled.h1`
  font-weight: 800;
  font-size: 200px;
  line-height: 200px;
  margin: 0;
`;

const Accent = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

function Team() {
  return (
    <TeamContainer>
      <Headline>
        <Accent>We Are</Accent>
      </Headline>
    </TeamContainer>
  );
}

export default Team;
