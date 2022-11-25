import React, { useState } from "react";
import Button from "components/ui/ButtonForm";
import LargeText from "components/ui/LargeText";
import AuthForm from "components/auth/AuthForm";
import styled from "styled-components";
import { useRouter } from "next/router";
interface ICredentialProps {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

interface IAuthContentProps {
  isLogin?: boolean;
}

const AuthContent = ({ isLogin }: IAuthContentProps) => {
  const router = useRouter(); // 화면 전환

  const [credentialsInvalid, setCredentialsInvalid] =
    useState<ICredentialProps>({
      email: false,
      password: false,
      confirmPassword: false,
    }); // 수정 예정
  const toggleAuthModeHandler = () => {
    // 로그인인지 회원가입인지
    if (!isLogin) {
      router.push("/login");
    } else {
      router.push("/login/signup");
    }
  };

  return (
    <AuthContentWrapper>
      <LocalLoginWrapper>
        <LargeText text="MEALTI" />
        <AuthForm isLogin={isLogin} />
        <div
          style={{
            width: "80%",
            alignItems: "flex-end",
          }}
        >
          <div
            onClick={toggleAuthModeHandler}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
          >
            {isLogin ? "회원가입하러가기" : "로그인하러가기"}
          </div>
        </div>
      </LocalLoginWrapper>
    </AuthContentWrapper>
  );
};

export default AuthContent;

const AuthContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const LocalLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 540px;
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.color.mainColor};
  padding: 10px;
`;
