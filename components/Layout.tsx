// 레이아웃
import NavBar from "components/NavBar";

import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import ThemeToggle from "components/ui/ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Wrapper>
        <NavBar />
        {children}
      </Wrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.backgroundColor};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.color.mainColor};
`;
