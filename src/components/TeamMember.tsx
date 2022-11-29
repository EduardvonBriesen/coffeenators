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
`;

const Image = styled.img`
  width: 10rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background.main};
`;

const Name = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
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
