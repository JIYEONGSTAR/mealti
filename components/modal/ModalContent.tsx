import React, { ReactNode } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
interface IModalContentProps {
  title: ReactNode;
  children: ReactNode;
  onClose: () => void;
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
        <div onClick={onClose}>
          <CloseIcon />
        </div>
      </CloseButton>
      <HeaderWrapper>{title}</HeaderWrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

// 전체 Modal 창
const Wrapper = styled.div`
  width: 430px;
  height: 60%;
  border-radius: 50px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.backgroundColor};
  color: ${({ theme }) => theme.color.textColor};

  /* overflow: scroll; */
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
  z-index: 5;
`;

// Modal content
const Content = styled.div`
  width: 100%;
  height: 90%;
  overflow: scroll;
`;
