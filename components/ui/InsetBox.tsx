import React from "react";
import styled from "styled-components";

const InsetBox = ({ children }: { children: React.ReactNode }) => {
  return <InsetBoxWrapper>{children}</InsetBoxWrapper>;
};

export default InsetBox;

const InsetBoxWrapper = styled.div`
  /* box-shadow: inset 0px 4px 10px 0px rgba(0, 0, 0, 0.3),
    0px 4px 10px 0px rgba(0, 0, 0, 0.3); */
  width: 90%;
  background-color: #f9f9f9;
  box-shadow: inset 0px 4px 3px 0px rgba(0, 0, 0, 0.2),
    0px 4px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  padding: 10px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
`;
