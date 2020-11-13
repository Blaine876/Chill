import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import chillLogo from "../../assets/images/chillLogo.svg";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background.primary.dark};
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

const SplashMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 100%;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  /* height: 30rem; */
  width: 30rem;
  object-fit: contain;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    /* height: 30rem; */
    width: 30rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.md}) and (max-width: ${({ theme }) => theme.mobile.lg}) {
    /* height: 40rem; */
    width: 40rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.lg}) and (max-width: ${({ theme }) => theme.mobile.xl}) {
    /* height: 50rem; */
    width: 50rem;
  }
`;

const Splash = () => {
  const history = useHistory();
  return (
    <Container>
      <SplashMain>
        <Logo src={chillLogo} />
        <ButtonDiv>
          <Button buttonText="Login" onClick={() => history.push("/login")} />
          <Button
            buttonText="Sign Up"
            onClick={() => history.push("/signup")}
          />
        </ButtonDiv>
      </SplashMain>
    </Container>
  );
};

export default Splash;
