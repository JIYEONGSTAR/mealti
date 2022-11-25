import { useState } from "react";
import React, { useContext } from "react";
import Input from "components/ui/Input";
import Button from "components/ui/ButtonForm";
import styled, { ThemeContext } from "styled-components";
import { useAuth } from "hooks/api/auth/index";
import { useRouter } from "next/router";
import useCurrentUser from "hooks/useCurrentUser";
import Checkbox from "@mui/material/Checkbox";
interface ICredentialProps {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}
interface IAccountProps {
  email: string;
  password: string;
  confirmPassword: string;
}

interface IAuthFormProps {
  isLogin?: boolean;
}
const AuthForm = ({ isLogin }: IAuthFormProps) => {
  const theme = useContext(ThemeContext);
  const route = useRouter();
  const { setCurrentUser } = useCurrentUser();
  const { postSignUp, postLogin } = useAuth();
  const [form, setForm] = useState({
    emailForm: "",
    passwordForm: "",
    nickNameForm: "",
    startDayForm: 0,
    expenseForm: 0,
  });
  const { emailForm, passwordForm, nickNameForm, startDayForm, expenseForm } =
    form;
  const [isCheckAuthLogin, setIsCheckAutoLogin] = useState<boolean>(true);
  const [isCheckAgree, setIsCheckAgree] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const handleUpdateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (!isLogin) {
      if (
        form.emailForm &&
        form.passwordForm &&
        form.nickNameForm &&
        form.startDayForm &&
        form.expenseForm
      ) {
        // 다 입력이 되면 활성화
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    } else {
      if (form.emailForm && form.passwordForm) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }
  };
  const submitHandler = () => {
    console.log(emailForm, passwordForm);
    if (!isLogin) {
      postSignUp({
        email: emailForm,
        password: passwordForm,
        username: nickNameForm,
        start_day: startDayForm,
        food_expenses: expenseForm,
      }).then((r: any) => route.push("/login"));
    } else {
      postLogin({ email: emailForm, password: passwordForm }).then((r: any) => {
        return (
          setCurrentUser({ ...r }),
          localStorage.setItem("user", JSON.stringify({ ...r })),
          route.push("/")
        );
      });
    }

    // onSubmit();
  };
  return (
    <AuthFormWrapper>
      <AuthInputWrapper>
        <Input
          name="emailForm"
          type="email"
          label="이메일을 입력해주세요"
          onUpdateValue={handleUpdateValue}
          value={emailForm}
          keyboardType="email-address"
          placeholder="입력하기"
        ></Input>
        <Input
          name="passwordForm"
          type="password"
          label="비밀번호를 입력해주세요"
          onUpdateValue={handleUpdateValue}
          secure
          value={passwordForm}
          placeholder="입력하기"
        />
        {!isLogin && (
          <>
            <Input
              name="nickNameForm"
              label="원하는 닉네임을 입력해주세요"
              placeholder="입력하기"
              value={nickNameForm}
              onUpdateValue={handleUpdateValue}
            />
            <Input
              name="startDayForm"
              label="매월 달력의 초기화 날짜를 입력해주세요."
              placeholder="입력하기"
              keyboardType="number-pad"
              value={startDayForm}
              onUpdateValue={handleUpdateValue}
            />
            <Input
              name="expenseForm"
              label="한달 식비 예상 금액을 입력해주세요."
              placeholder="입력하기"
              keyboardType="number-pad"
              value={expenseForm}
              onUpdateValue={handleUpdateValue}
            />
          </>
        )}
      </AuthInputWrapper>
      <CheckBoxWrapper>
        {isLogin ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              size="small"
              sx={{
                color: theme.color.subColor,
                "&.Mui-checked": {
                  color: theme.color.subColor,
                },
              }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setIsCheckAutoLogin(event.target.checked);
              }}
            ></Checkbox>
            <div>자동로그인</div>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              size="small"
              //   color={theme.color.subColor}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setIsCheckAgree(event.target.checked);
              }}
            ></Checkbox>
            <div>개인정보수집동의</div>
          </div>
        )}
      </CheckBoxWrapper>
      <ButtonWrapper>
        <Button
          disabled={isLogin ? buttonDisabled : !isCheckAgree && buttonDisabled}
          text={isLogin ? "로그인" : "회원가입"}
          onClick={submitHandler}
        />
      </ButtonWrapper>
    </AuthFormWrapper>
  );
};

export default AuthForm;

const AuthFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const AuthInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const CheckBoxWrapper = styled.div`
  margin: 20px, 10px;
  display: flex;
  justify-content: flex-start;
  width: 80%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;
