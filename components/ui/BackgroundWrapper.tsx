import React, { ReactNode } from "react";
import styled from "styled-components";

const BackgroundWrapper = ({ children }: { children: ReactNode }) => {
  return <Div>{children}</Div>;
};

export default BackgroundWrapper;

const Div = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.backgroundColor};
  top: 0;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 60%;
    width: 100%;
    border-radius: 0 0 40% 40%;
    background-color: ${({ theme }) => theme.color.mainColor};
  }
`;
