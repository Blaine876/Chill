import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import chillLogo from "../../assets/images/chillLogo.svg";
import { Link } from "react-router-dom";
const LoginContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.background.primary.dark};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const LoginMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  width: 100%;
`;

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 5rem;
`;

const Logo = styled.img`
  width: 30rem;
  object-fit: contain;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 30rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.md}) and (max-width: ${({ theme }) => theme.mobile.lg}) {
    width: 40rem;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.lg}) and (max-width: ${({ theme }) => theme.mobile.xl}) {
    width: 50rem;
  }
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;
`;

const LoginInputField = styled.input`
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: none;
  outline: none;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 100%;
  }
`;

const FormDiv = styled.div`
  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 100%;
  }
`;

const LoginText = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary.light};
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.blue};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.blue};
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginMain>
        <LogoDiv>
          <Logo src={chillLogo} />
        </LogoDiv>
        <LoginForm>
          <FormDiv>
            <InputDiv>
              <LoginInputField type="text" placeholder="Username or Email" />
            </InputDiv>

            <InputDiv>
              <LoginInputField type="password" placeholder="Password" />
            </InputDiv>

            <Button buttonText="Login" type="submit" />
          </FormDiv>
        </LoginForm>
        <LoginText>
          Don't have an account?
          <LoginLink to="/signup"> Sign Up</LoginLink>
        </LoginText>
      </LoginMain>
    </LoginContainer>
  );
};

export default Login;
