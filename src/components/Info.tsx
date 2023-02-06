import React, { useState } from 'react';
import styled from 'styled-components';

const image = require('../assets/Info.png');

const InfoButtonContainer = styled.div`
  width: 25px;  
  position: relative;
  display: flex;
  cursor: pointer;
  margin-left: 17px;
`;

const InfoIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${(props) => props.theme.colors.secondary};
`;

const ImagePopup = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
`;

const InfoButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <InfoButtonContainer onClick={handleClick}>
      <InfoIcon>i</InfoIcon>
      {isVisible && (
      <ImagePopup>
          <Image src={String(image)} alt="Info" />
      </ImagePopup>
      )}
    </InfoButtonContainer>
  );
};

export default InfoButton;