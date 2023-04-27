/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import InitializationForm from "components/auth/InitializationForm";
import ButtonForm from "components/ui/ButtonForm";
import styled from "styled-components";
import Seo from "components/Seo";
import useCurrentUser from "hooks/useCurrentUser";
import Image from "next/image";
import { useUserInfo } from "hooks/useUser";
import { UserInfo } from "types";
const index = () => {
  const { currentUser } = useCurrentUser();
  const [isEdit, setIsEdit] = useState(false);
  const userInfo = useUserInfo(currentUser.id) as UserInfo;

  return (
    <>
      <Seo title="마이페이지" />
      <MyPageWrapper>
        <Image
          src={currentUser.picture}
          width={50}
          height={50}
          alt="user-profile"
        />
        <div>{currentUser.name}님 환영합니다.</div>
        <InitializationForm isEdit={isEdit} userInfo={userInfo} />
        <ButtonForm
          onClick={() => setIsEdit(!isEdit)}
          text={!isEdit ? "정보바꾸기" : "바꾸기취소"}
        />
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
  /* background-color: ${(props) => props.theme.color.backgroundColor}; */
  gap: 10px;
  align-items: center;
  height: 100%;
`;
