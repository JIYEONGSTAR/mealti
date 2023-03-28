// 네비게이션 바
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import ThemeToggle from "./ui/ThemeToggle";
import LargeText from "./ui/LargeText";
import PersonIcon from "@mui/icons-material/Person";
const NavBar = ({ onChangeColorMode, isDark }: any) => {
  const router = useRouter();
  return (
    <Nav>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LargeText text="MEALTI" />
      </div>
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
          active={router.pathname === "/mypage" ? "active" : ""}
          href="/mypage"
        >
          <PersonIcon />
        </LinkWrapper>
        <ThemeToggle onChangeColorMode={onChangeColorMode} isDark={isDark} />
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background-color: ${(props) => props.theme.color.mainColor};
`;
const NavWrapper = styled.div`
  bottom: 0;
  position: fixed;
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.backgroundColor};
  padding: 10px;
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
