import styled from "styled-components";

const AboutContainer = styled.div`
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

const Text = styled.p`
  column-count: 2;
  text-align: justify;
  max-width: 750px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

function About() {
  return (
    <AboutContainer id="about">
      <Headline>The Project </Headline>
      <Text>
        Orci semper nec ut neque donec urna. Iaculis facilisis purus ut
        tristique nisi scelerisque lectus. Lacus ultrices ipsum sagittis
        consequat sed vehicula pretium. Facilisi amet quis pharetra urna.
        Gravida massa egestas aenean fringilla facilisi est. Quisque fusce
        varius venenatis enim. Ullamcorper urna ut sit hac pellentesque quis.
        Quam ultrices egestas ac morbi mi viverra. Elementum eget diam nec
        tincidunt velit. Arcu sagittis dolor mauris posuere urna nam. Congue
        hendrerit libero nec viverra a at. Dolor nisl aliquet lobortis malesuada
        duis amet. Mauris faucibus eu maecenas egestas sed. Amet quis elit
        euismod sed. Odio suspendisse bibendum pharetra facilisis erat.
      </Text>
    </AboutContainer>
  );
}

export default About;
