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
  font-size: 20vh;
  line-height: 20vh;
  margin: 0;
`;

const Accent = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const SubHeadline = styled.h2`
  max-width: 70%;
  font-weight: 400;
  font-size: 3vh;
  line-height: 3vh;
`;

function Home() {
  return (
    <HomeContainer id="home">
      <Headline>
        Visualizing <Accent>Coffee Data</Accent>
      </Headline>
      <SubHeadline>
        Uncover the hidden effects of the COVID-19 pandemic on the European
        coffee market with our interactive map visualization.
      </SubHeadline>
    </HomeContainer>
  );
}

export default Home;
