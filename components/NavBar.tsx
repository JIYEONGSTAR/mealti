// 네비게이션 바
import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import ThemeToggle from "./ui/ThemeToggle";
import LargeText from "./ui/LargeText";
import PersonIcon from "@mui/icons-material/Person";
import ButtonForm from "components/ui/ButtonForm";

import useCurrentUser from "hooks/useCurrentUser";
import { fireAuth } from "firebase/clientApp";
import { ThemeContext } from "styled-components";
const NavBar = () => {
  const theme = useContext(ThemeContext);
  const { setCurrentUser } = useCurrentUser();
  const router = useRouter();
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
              console.log("logout");
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
            }}
          />
        </ButtonWrapper>
      </NavTopWrapper>
      <NavWrapper>
        <LinkWrapper active={router.pathname === "/" ? "active" : ""} href="/">
          Home
        </LinkWrapper>
        <LinkWrapper
          active={router.pathname === "/meal" ? "active" : ""}
          href="/meal"
        >
          Meal
        </LinkWrapper>
        <LinkWrapper
          active={router.pathname === "/register" ? "active" : ""}
          href="/register"
        >
          +
        </LinkWrapper>
        <LinkWrapper
          active={router.pathname === "/recipe" ? "active" : ""}
          href="/recipe"
        >
          recipe
        </LinkWrapper>

        <LinkWrapper
          active={router.pathname === "/mypage" ? "active" : ""}
          href="/mypage"
        >
          <PersonIcon />
        </LinkWrapper>
        <ThemeToggle />
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
  bottom: 0;
  position: fixed;
  display: flex;
  /* gap: 1rem; */
  width: 480px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.backgroundColor};
  padding: 1rem;
  border-radius: 20px 20px 0 0;
  z-index: 1000;
`;
const LinkWrapper = styled(Link)<{ active: string }>`
  font-weight: 600;
  font-size: 18px;
  margin: 0 20px 0 20px;
  color: ${(props) => props.theme.color.textColor};

  ${(props) =>
    props.active === "active" &&
    css`
      text-decoration: underline;
      text-decoration-color: ${(props) => props.theme.color.subColor};
      text-underline-offset: 8px;
    `};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  cursor: pointer;
`;
