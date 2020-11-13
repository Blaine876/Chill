import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import Button from "../../components/Button";
import chillLogo from "../../assets/images/chillLogo.svg";

const SignUpContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.background.primary.dark};
`;

const SignUpMain = styled.main`
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

const SignUpForm = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;
const FormDiv = styled.div`
  background-color: #1a1a1a;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.md}) and (max-width: ${({ theme }) => theme.mobile.lg}) {
    width: 40rem;
  }
`;
const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;
`;
const SignUpInputField = styled.input`
  font-size: 1.6rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: none;
  outline: none;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 100%;
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

const SignUpText = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary.light};
`;

const SignUpLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.blue};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary.blue};
  }
`;

const SignUp = () => {
  const history = useHistory();
  return (
    <SignUpContainer>
      <SignUpMain>
        <LogoDiv>
          <Logo src={chillLogo} alt="logo" />
        </LogoDiv>
        <SignUpForm>
          <FormDiv>
            <InputDiv>
              <SignUpInputField type="text" placeholder="Email" />
            </InputDiv>
            <InputDiv>
              <SignUpInputField type="text" placeholder="Username" />
            </InputDiv>
            <InputDiv>
              <SignUpInputField type="password" placeholder="Password" />
            </InputDiv>

            <Button
              buttonText="Sign Up"
              type="submit"
              onClick={() => history.push("/profile")}
            />
          </FormDiv>
        </SignUpForm>
        <SignUpText>
          Already have an account?
          <SignUpLink to="/login"> Login</SignUpLink>
        </SignUpText>
      </SignUpMain>
    </SignUpContainer>
  );
};

export default SignUp;
