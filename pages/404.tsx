import React from "react";
import styled from "styled-components";
const NotFount = () => {
  return <NotFountWrapper>페이지가 없습니다.</NotFountWrapper>;
};

export default NotFount;

const NotFountWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
