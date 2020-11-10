import "./App.css";
import styled from "styled-components";

const AppRoot = styled.div`
  height: 100vh;
  background-color: #101010;
`;

const GreetingsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 2rem;
`;

const GreetingsText = styled.h1`
  font-size: 6.4rem;
  font-family: "Frijole", cursive;
  color: #68c3eb;
`;

function App() {
  return (
    <AppRoot className="App">
      <GreetingsDiv>
        <GreetingsText>Chill</GreetingsText>
      </GreetingsDiv>
    </AppRoot>
  );
}

export default App;
