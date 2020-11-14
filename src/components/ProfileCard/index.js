import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: white;
    opacity: 1;
  }
`;

const CardImage = styled.img`
  height: 15rem;
  width: 15rem;
  object-fit: contain;
  border-radius: 5px;

  &:hover {
    border: 1px solid white;
    transform: scale(1.02);
  }
`;

const ProfileName = styled.p`
  font-size: 2rem;
  /* color: grey; */
  color: ${({ theme }) => theme.colors.primary.light};
  font-weight: 600;
  text-align: center;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const ProfileCard = ({ avatar, profileName }) => {
  return (
    <CardContainer>
      <CardImage src={avatar} />
      <ProfileName>{profileName}</ProfileName>
    </CardContainer>
  );
};

export default ProfileCard;
