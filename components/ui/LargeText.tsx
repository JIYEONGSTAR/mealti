import React from "react";
import styled from "styled-components";
const LargeText = ({ text }: { text: string }) => {
  return (
    <LargeTextWrapper>
      <LargeTextContainer>{text}</LargeTextContainer>
    </LargeTextWrapper>
  );
};

export default LargeText;

const LargeTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LargeTextContainer = styled.p`
  color: ${(props) => props.theme.color.subColor};
  font-size: 30px;
  font-weight: 700;
  text-shadow: 2px 2px 2px gray;
`;
