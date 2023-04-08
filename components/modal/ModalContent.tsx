import React, { ReactNode } from "react";
import styled from "styled-components";

interface IModalContentProps {
  title: ReactNode;
  children: ReactNode;
  onClose: () => void;
  kind: "edit" | "read";
}

// Modal 창 open 시 title, content
export const ModalContent = ({
  title,
  children,
  onClose,
}: IModalContentProps) => {
  return (
    <Wrapper>
      <CloseButton>
        <div onClick={onClose}>x</div>
      </CloseButton>

      <HeaderWrapper>
        <div>{title}</div>
      </HeaderWrapper>
      <Content>
        <div>{children}</div>
      </Content>
    </Wrapper>
  );
};

// 전체 Modal 창
const Wrapper = styled.div`
  width: 480px;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  overflow: scroll;
`;

// Modal title
const HeaderWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 15pt;
`;

// modal close button
const CloseButton = styled.div`
  width: 100%;
  text-align: right;
  cursor: pointer;
  &:hover,
  &:active {
    color: lightgray;
  }
`;

// Modal content
const Content = styled.div`
  width: 100%;
`;
