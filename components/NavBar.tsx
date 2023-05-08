// 네비게이션 바
import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import ThemeToggle from "./ui/ThemeToggle";
import LargeText from "./ui/LargeText";

import ButtonForm from "components/ui/ButtonForm";

import useCurrentUser from "hooks/useCurrentUser";
import { fireAuth } from "firebase/clientApp";
import { ThemeContext } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import PersonIcon from "@mui/icons-material/Person";
import { QueryClient } from "react-query";
const NavBar = () => {
  const theme = useContext(ThemeContext);
  const { setCurrentUser } = useCurrentUser();
  const router = useRouter();
  const queryClient = new QueryClient();
  return (
    <Nav>
      <NavTopWrapper>
        <ButtonWrapper onClick={() => router.push("/")}>
          <LargeText text="MEALTI" />
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonForm
            paddingStyle="0"
            fontSize="0.7rem"
            text="로그아웃"
            onClick={() => {
              fireAuth.signOut();
              setCurrentUser({
                email: "",
                family_name: "",
                given_name: "",
                granted_scopes: "",
                id: "",
                locale: "",
                name: "",
                picture: "",
                verified_email: false,
              });
              queryClient.clear();
            }}
          />
        </ButtonWrapper>
      </NavTopWrapper>
      <NavWrapper>
        <ul>
          <LinkContainer active={router.pathname === "/" ? "active" : ""}>
            <LinkWrapper
              href="/"
              active={router.pathname === "/" ? "active" : ""}
            >
              <HomeIcon />
              <span>Home</span>
            </LinkWrapper>
          </LinkContainer>
          <LinkContainer active={router.pathname === "/meal" ? "active" : ""}>
            <LinkWrapper
              href="/meal"
              active={router.pathname === "/meal" ? "active" : ""}
            >
              <CalendarMonthIcon />
              <span>Meal</span>
            </LinkWrapper>
          </LinkContainer>
          <LinkContainer
            active={router.pathname === "/register" ? "active" : ""}
          >
            <LinkWrapper
              href="/register"
              active={router.pathname === "/register" ? "active" : ""}
            >
              <AddCircleIcon /> <span>+</span>
            </LinkWrapper>
          </LinkContainer>
          <LinkContainer active={router.pathname === "/recipe" ? "active" : ""}>
            <LinkWrapper
              href="/recipe"
              active={router.pathname === "/recipe" ? "active" : ""}
            >
              <OutdoorGrillIcon />
              <span>recipe</span>
            </LinkWrapper>
          </LinkContainer>
          <LinkContainer active={router.pathname === "/mypage" ? "active" : ""}>
            <LinkWrapper
              href="/mypage"
              active={router.pathname === "/mypage" ? "active" : ""}
            >
              <PersonIcon />
              <span>mypage</span>
            </LinkWrapper>
          </LinkContainer>
          <ThemeToggle />
        </ul>
      </NavWrapper>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, */
  /* rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */

  background-color: transparent;
`;
const NavTopWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem 0 1.5rem;
`;

const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 5vh;
  /* background-color: ${(props) => props.theme.color.backgroundColor}; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
  /* padding: 1rem; */
  /* border-radius: 20px 20px 0 0; */
  display: flex;
  gap: 1rem 0;
  width: 480px;
  justify-content: center;
  align-items: center;
  z-index: 10;
  > ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
const LinkContainer = styled.li<{ active: string }>`
  width: 100%;
  position: relative;
  list-style: none;
  font-weight: 600;
  font-size: 18px;
  /* margin: 0 20px 0 20px; */
  transition: all 0.3s ease-in-out;
  /* ${(props) =>
    props.active === "active" &&
    css`
      &::before {
        height: 100%;
        left: -15px;
        border-radius: 0 0 30px 0;
        background-color: ${(props) => props.theme.color.backgroundColor};
      }
      &::after {
        height: 100%;
        right: -15px;
        border-radius: 0 0 0 30px;
        background-color: ${(props) => props.theme.color.backgroundColor};
      }
    `}; */
`;

const LinkWrapper = styled(Link)<{ active: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
  height: 100%;
  line-height: 1.4;
  :hover {
    border: 1px solid ${(props) => props.theme.color.subColor};
    border-radius: 30px 30px 0 0;
  }
  ${(props) =>
    props.active === "active" &&
    css`
      ::before,
      ::after {
        content: "";
        position: absolute;
        background-color: ${props.theme.color.subColor};
        z-index: -1;
      }
      ::before {
        width: 100%;
        height: 100%;
        border-radius: 30px 30px 0 0;
      }
      > span,
      > svg > path {
        color: ${props.theme.color.backgroundColor};
      }
    `}

  & > span {
    font-size: 0.5rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  cursor: pointer;
`;
