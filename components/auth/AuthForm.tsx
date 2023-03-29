import { useEffect, useState } from "react";
import React, { useContext } from "react";
import Input from "components/ui/Input";
import Button from "components/ui/ButtonForm";
import styled, { ThemeContext } from "styled-components";
import { useRouter } from "next/router";
import useCurrentUser from "hooks/useCurrentUser";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore, fireAuth } from "firebase/clientApp";
interface InputForm {
  initialDate: number;
  budget: number;
}

const AuthForm = ({ isEdit }: { isEdit: boolean }) => {
  const { currentUser } = useCurrentUser();
  const router = useRouter();
  const [uid, setUid] = useState<string>("");
  const [form, setForm] = useState<InputForm>({
    initialDate: 0,
    budget: 0,
  });

  useEffect(() => {
    // if (currentUser.id === "") {
    //   router.push("/auth/login");
    // } else {
    console.log("authform", currentUser);
    setUid(currentUser.id);

    // }
  }, []);

  useEffect(() => {
    if (uid) {
      const getUserInfo = async () => {
        const userInfo = await getDoc(doc(firestore, `users`, uid));
        console.log("userInfo", userInfo.data());
        userInfo.data() &&
          setForm({
            initialDate: userInfo.data()!.initialDate,
            budget: userInfo.data()!.budget,
          });
      };
      getUserInfo();
    }
  }, [uid]);

  const { initialDate, budget } = form;
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const handleUpdateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (initialDate && budget) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const submitHandler = async () => {
    await setDoc(doc(firestore, "users", uid), {
      initialDate,
      budget,
    }).then((res) => router.push("/"));
  };

  return (
    <AuthFormContainer>
      {!isEdit ? (
        <>
          <>한달 초기화 날짜 : {form.initialDate}</>
          <>비용 : {form.budget}</>
        </>
      ) : (
        <>
          <AuthInputWrapper>
            <Input
              name="initialDate"
              label="매월 달력의 초기화 날짜를 입력해주세요."
              placeholder="입력하기"
              keyboardType="number-pad"
              value={initialDate}
              onUpdateValue={handleUpdateValue}
            />
            <Input
              name="budget"
              label="한달 식비 예상 금액을 입력해주세요."
              placeholder="입력하기"
              keyboardType="number-pad"
              value={budget}
              onUpdateValue={handleUpdateValue}
            />
          </AuthInputWrapper>
          <ButtonWrapper>
            <Button
              disabled={buttonDisabled}
              text={"정보저장하기"}
              onClick={submitHandler}
            />
          </ButtonWrapper>
        </>
      )}
    </AuthFormContainer>
  );
};

export default AuthForm;

const AuthFormContainer = styled.div`
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

const ButtonWrapper = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;
