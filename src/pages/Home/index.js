import React from "react";
import styled from "styled-components";

import Navbar from "../../components/Navbar";

const HomeContainer = styled.div`
  height: 200vh;
  background-color: ${({ theme }) => theme.background.primary.dark};
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
    </HomeContainer>
  );
};

export default Home;
