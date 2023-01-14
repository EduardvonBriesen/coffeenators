import styled from "styled-components";

interface Props {
  name: string;
  text: string;
  image: string;
}

const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 15rem;
  padding: 1rem;
`;

const Image = styled.img`
  width: 12vw;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background.main};
`;

const Name = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
`;

function TeamMember({ name, text, image }: Props) {
  return (
    <TeamMemberContainer>
      <Image src={image} alt="team member" />
      <Name>{name}</Name>
      <Text>{text}</Text>
    </TeamMemberContainer>
  );
}

export default TeamMember;
