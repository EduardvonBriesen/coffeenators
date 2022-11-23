import styled from "styled-components";

const HomeContainer = styled.div`
  id: home;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: ${(props) => props.theme.colors.background.main};
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

const SubHeadline = styled.h2`
  max-width: 750px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

function Home() {
  return (
    <HomeContainer id="home">
      <Headline>
        Visualizing <Accent>Coffee Data</Accent>
      </Headline>
      <SubHeadline>
        Mauris massa mollis volutpat ornare platea commodo blandit. Euismod
        interdum pretium neque tellus bibendum amet.
      </SubHeadline>
    </HomeContainer>
  );
}

export default Home;
