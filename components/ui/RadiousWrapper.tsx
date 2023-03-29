import React, { ReactNode } from "react";
import styled from "styled-components";
interface LayoutProps {
  children: ReactNode;
}

const RadiousLayout = ({ children }: LayoutProps) => {
  return <RadiousLayoutContainer>{children}</RadiousLayoutContainer>;
};

export default RadiousLayout;

const RadiousLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  height: 60%;
  background-color: ${({ theme }) => theme.color.backgroundColor};
  border-radius: 50px 50px 0 0;
  box-shadow: 0px -7px 8px -3px #a0a0a0;
`;
