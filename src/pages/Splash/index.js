import React from "react";
import styled from "styled-components";
import chillLogo from "../../assets/images/chillLogo.svg";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background.primary.dark};
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Logo = styled.img`
  height: 30rem;
  width: 30rem;
  object-fit: contain;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    height: 30rem;
    width: 30rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.md}) and (max-width: ${({ theme }) => theme.mobile.lg}) {
    height: 40rem;
    width: 40rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.lg}) and (max-width: ${({ theme }) => theme.mobile.xl}) {
    height: 50rem;
    width: 50rem;
  }

  /* @media (min-width: ${({ theme }) => theme.mobile.sm}) {
    height: 40rem;
    width: 40rem;
  }

  @media (min-width: ${({ theme }) => theme.mobile.md}) {
    height: 40rem;
    width: 40rem;
  }

  @media (min-width: ${({ theme }) => theme.mobile.lg}) {
    height: 50rem;
    width: 50rem;
  } */
`;

const Splash = () => {
  return (
    <Container>
      <Logo src={chillLogo} />
    </Container>
  );
};

export default Splash;
