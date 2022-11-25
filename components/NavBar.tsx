// 네비게이션 바
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import ThemeToggle from "./ui/ThemeToggle";
const NavBar = ({ onChangeColorMode, isDark }: any) => {
  const router = useRouter();
  return (
    <Nav>
      <div>
        <LinkWrapper active={router.pathname === "/" ? "active" : ""} href="/">
          Home
        </LinkWrapper>
        <LinkWrapper
          active={router.pathname === "/account" ? "active" : ""}
          href="/account"
        >
          Account
        </LinkWrapper>
        <LinkWrapper
          active={router.pathname === "/recipe" ? "active" : ""}
          href="/recipe"
        >
          Recipe
        </LinkWrapper>
        <LinkWrapper
          active={router.pathname === "/community" ? "active" : ""}
          href="/community"
        >
          Community
        </LinkWrapper>
        <LinkWrapper
          active={router.pathname === "/mypage" ? "active" : ""}
          href="/mypage"
        >
          MyPage
        </LinkWrapper>
        <ThemeToggle onChangeColorMode={onChangeColorMode} isDark={isDark} />
      </div>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  > div {
    display: flex;
    gap: 10px;
  }
`;

const LinkWrapper = styled(Link)<{ active: string }>`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.active === "active" && "tomato"};
`;
