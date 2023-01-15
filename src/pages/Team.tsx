import styled from "styled-components";
import TeamMember from "../components/TeamMember";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // I don't know why this doesn't work
  background-color: ${(props) => props.theme.colors.background.dark};
  width: 100vw;
  min-height: 100vh;
  padding: 12vh 10% 5% 10%;
  box-sizing: border-box;
`;

const Headline = styled.h1`
  font-weight: 800;
  font-size: 20vh;
  line-height: 20vh;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
`;

const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-top: 1rem;
`;

function Team() {
  return (
    <TeamContainer id="team">
      <Headline>We Are</Headline>
      <TeamMemberContainer
        style={{
          alignItems: "flex-start",
        }}
      >
        <TeamMember
          name="Lizzy"
          text="Currently, a student at the LMU Munich, studying Human Computer Interaction. Vibrating so fast you leave the visible spectrum is an acceptable side effect of having a very normal amount of coffee.
          "
          image={"../assets/lizzy.png"}
        />
        <TeamMember
          name="Yousri"
          text="I am a Media Informatics student at LMU. When I'm not studying, I'm either designing or taking portraits. I don't drink coffee, I eat it."
          image={"../assets/yousri.png"}
        />
        <TeamMember
          name="Peiwen"
          text="I am an Informatics student at LMU. I like to drink coffee in the morning and don't forget to add sugar."
          image={"../assets/peiwen.png"}
        />
        <TeamMember
          name="Ronny"
          text="I am a computer science student at LMU Munich. My inner peace is as strong as my resistance to coffee - I drink espresso before sleep."
          image={"../assets/ronny.png"}
        />
        <TeamMember
          name="Eduard"
          text="I am a Human Computer Interaction student at LMU. When I'm not studying, I'm making coffee. I'm a weird coffee person."
          image={"../assets/eduard.png"}
        />
      </TeamMemberContainer>
    </TeamContainer>
  );
}

export default Team;
