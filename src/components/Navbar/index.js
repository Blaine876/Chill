import React from "react";
import styled from "styled-components";
import chillLogo from "../../assets/images/chillLogo.svg";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import avatar1 from "../../assets/images/avatar1.png";

const NavbarContainer = styled.nav`
  padding: 0rem 1rem;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
  margin-right: 2rem;

  cursor: pointer;

  && {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.primary.light};
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    && {
      font-size: 1.6rem;
    }
  }
`;

const StyledNotificationsIcon = styled(NotificationsIcon)`
  margin-right: 2rem;
  cursor: pointer;

  && {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.primary.light};
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    && {
      font-size: 1.6rem;
    }
  }
`;

const StyledCardGiftcardIcon = styled(CardGiftcardIcon)`
  margin-right: 2rem;

  cursor: pointer;

  && {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.primary.light};
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    && {
      font-size: 1.6rem;
    }
  }
`;

const StyledArrowDropDownIcon = styled(ArrowDropDownIcon)`
  cursor: pointer;

  && {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`;

const NavbarLogo = styled.img`
  width: 8rem;
  margin-right: 1rem;
`;

const NavbarAvatar = styled.img`
  width: 5rem;
  border-radius: 5px;
  cursor: pointer;

  /* @media screen and (min-width: ${({ theme }) =>
    theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    width: 5rem;
  } */
`;

const BrowseDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrowseText = styled.p`
  display: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary.light};

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    display: inline;
  }
`;

const NavbarText = styled.p`
  font-size: 1.6rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.primary.light};
  white-space: nowrap;

  @media screen and (min-width: ${({ theme }) =>
      theme.mobile.sm}) and (max-width: ${({ theme }) => theme.mobile.md}) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <BrowseDiv>
        <NavbarLogo src={chillLogo} />
        <NavbarText>Home</NavbarText>
        <NavbarText>TV Shows</NavbarText>
        <NavbarText>Movies</NavbarText>
        <BrowseText>Browse</BrowseText>
        <StyledArrowDropDownIcon />
      </BrowseDiv>

      <SearchDiv>
        <StyledSearchIcon />
        <StyledCardGiftcardIcon />
        <StyledNotificationsIcon />
        <NavbarAvatar src={avatar1} />
      </SearchDiv>
    </NavbarContainer>
  );
};

export default Navbar;
