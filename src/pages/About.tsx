import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: ${(props) => props.theme.colors.background.main};
  width: 100vw;
  height: 100vh;
  padding: 10% 10% 5% 10%;
  box-sizing: border-box;
`;

const Headline = styled.h1`
  font-weight: 800;
  font-size: 20vh;
  line-height: 20vh;
  margin: 0;
`;

const Text = styled.p`
  column-count: 2;
  text-align: justify;
  max-width: 50vw;
  font-weight: 400;
  font-size: 2vh;
  line-height: 2.5vh;
`;

function About() {
  return (
    <AboutContainer id="about">
      <Headline>The Project </Headline>
      <Text>
        Our project aims to visualize the effects of the COVID-19 pandemic on
        the coffee market in Europe through a map of Europe. The map allows
        users to explore and compare the coffee consumption and revenue of
        various European countries between 2018 and 2022 using data from
        Statista. The main research question is whether the pandemic has had an
        effect on the European coffee industry. We may also investigate which
        countries were most affected. The coffee market is an important aspect
        of the European economy, and the pandemic has greatly impacted it. The
        decline in sales in cafes and restaurants has resulted in a decrease in
        revenue for the coffee industry. With this visualization, we hope to
        provide a clear picture of the pandemic's impact on the European coffee
        market.
      </Text>
    </AboutContainer>
  );
}

export default About;
