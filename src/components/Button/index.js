import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  background-image: linear-gradient(to right, #3ba7f5, #338ccc);
  font-size: 1.6rem;
  padding: 1rem 3rem;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
  color: white;
  outline: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-image: linear-gradient(to left, #3ba7f5, #338ccc);
    transition: 5s ease-in-out;
  }
`;

const Button = ({ buttonText, onClick, type }) => {
  return (
    <ButtonContainer>
      <StyledButton type={type} onClick={onClick}>
        {buttonText}
      </StyledButton>
    </ButtonContainer>
  );
};

export default Button;
