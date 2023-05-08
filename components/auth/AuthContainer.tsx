import React, { ReactNode } from "react";
import styled from "styled-components";
import LargeText from "components/ui/LargeText";

interface AuthContainerProps {
  children: ReactNode;
}

const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <Container>
      <Wrapper>
        <LargeText text="MEALTI" />
        {children}
      </Wrapper>
    </Container>
  );
};

export default AuthContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.backgroundColor};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 480px;
  height: 70vh;
  align-items: center;
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.color.mainColor};
  padding: 10px;
  text-align: center;
  @media screen and (max-width: 480px) {
    border: none;
  }
`;
