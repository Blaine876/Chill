import React from "react";
import styled from "styled-components";
import chillLogo from "../../assets/images/chillLogo.svg";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background.primary.dark};
`;

const Main = styled.main`
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Logo = styled.img`
  height: 30rem;
  width: 30rem;
  object-fit: contain;
`;

const Splash = () => {
  return (
    <Container>
      <Main>
        <Logo src={chillLogo} />
      </Main>
    </Container>
  );
};

export default Splash;
