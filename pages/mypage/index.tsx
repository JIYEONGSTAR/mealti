/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import InitializationForm from "components/auth/InitializationForm";
import ButtonForm from "components/ui/ButtonForm";
import styled from "styled-components";
import Seo from "components/Seo";
const index = () => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <Seo title="마이페이지" />
      <MyPageWrapper>
        <button onClick={() => setIsEdit(!isEdit)}>바꾸기</button>
        <InitializationForm isEdit={isEdit} />
      </MyPageWrapper>
    </>
  );
};

export default index;

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.color.backgroundColor};
  gap: 10px;
`;
