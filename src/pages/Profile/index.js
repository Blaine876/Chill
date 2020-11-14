import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";

import chillLogo from "../../assets/images/chillLogo.svg";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";
import avatar4 from "../../assets/images/avatar4.png";
import avatar5 from "../../assets/images/avatar5.png";

const ProfileContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background.primary.dark};
`;

const ProfileMain = styled.main`
  padding: 2rem 10rem;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    padding: 2rem;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  outline: none;
`;

const Logo = styled.img`
  width: 10rem;
  margin-bottom: 5rem;
`;

const HeaderText = styled.p`
  color: ${({ theme }) => theme.colors.primary.light};
  font-size: 5rem;
  font-weight: 600;
  text-align: center;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    font-size: 4rem;
  }
`;

const ProfileCardDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const ManageButton = styled.button`
  padding: 1rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  border: 2px solid gray;
  color: grey;
  background-color: ${({ theme }) => theme.background.primary.dark};
  cursor: pointer;
  letter-spacing: 1.5px;

  &:hover {
    color: white;
    border: 2px solid white;
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileMain>
        <LogoLink>
          <Logo src={chillLogo} />
        </LogoLink>

        <ProfileDiv>
          <HeaderText>Who's Chilling?</HeaderText>
          <ProfileCardDiv>
            <ProfileCard profileName="Blaine" avatar={avatar1} />
            <ProfileCard profileName="Brad" avatar={avatar2} />
            <ProfileCard profileName="David" avatar={avatar3} />
            <ProfileCard profileName="David" avatar={avatar4} />
            <ProfileCard profileName="Shaun" avatar={avatar5} />
          </ProfileCardDiv>
          <ManageButton>Manage Profiles</ManageButton>
        </ProfileDiv>
      </ProfileMain>
    </ProfileContainer>
  );
};

export default Profile;
