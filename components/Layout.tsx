// 레이아웃
import NavBar from "components/NavBar";

import React from "react";
import styled from "styled-components";

const Layout = ({ children, onChangeColorMode, isDark }: any) => {
  return (
    <Container>
      <Wrapper>
        <NavBar onChangeColorMode={onChangeColorMode} isDark={isDark} />
        <Wrapper>{children}</Wrapper>
      </Wrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.backgroundColor};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
`;
