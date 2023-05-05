import React, { useEffect, useState } from "react";
import Input from "components/ui/Input";
import Button from "components/ui/ButtonForm";
import styled from "styled-components";
import { useRouter } from "next/router";
import useCurrentUser from "hooks/useCurrentUser";
import { UserInfo } from "types";
import { usePostUserInfo } from "hooks/useUser";
interface InputForm {
  initialDate: number;
  budget: number;
}

const InitializationForm = ({
  isEdit,
  userInfo,
}: {
  isEdit: boolean;
  userInfo?: UserInfo;
}) => {
  const { currentUser } = useCurrentUser();

  const postInfo = usePostUserInfo();
  const router = useRouter();
  const [form, setForm] = useState<InputForm>({
    initialDate: userInfo?.initialDate ?? 1,
    budget: userInfo?.budget ?? 0,
  });

  const { initialDate, budget } = form;
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const handleUpdateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (initialDate > 0 && initialDate < 30 && budget > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleSubmit = async () => {
    postInfo({
      uid: currentUser.id,
      budget: form.budget,
      initialDate: form.initialDate,
    });
    if (!isEdit) {
      alert("정보가 저장되었습니다.");
    } else {
      alert("정보가 수정되었습니다.");
    }

    router.push("/");
  };

  return (
    <InitializationFormContainer>
      {!isEdit ? (
        <InitializationInputWrapper>
          <p>한달 초기화 날짜 : {form.initialDate}</p>
          <p>비용 : {form.budget}</p>
        </InitializationInputWrapper>
      ) : (
        <>
          <InitializationInputWrapper>
            <Input
              name="initialDate"
              label="매월 달력의 초기화 날짜를 입력해주세요."
              placeholder="입력하기"
              type="number"
              value={initialDate}
              onUpdateValue={handleUpdateValue}
            />
            <Input
              name="budget"
              label="한달 식비 예상 금액을 입력해주세요."
              placeholder="입력하기"
              type="number"
              value={budget}
              onUpdateValue={handleUpdateValue}
            />
          </InitializationInputWrapper>
          <ButtonWrapper>
            <Button
              disabled={buttonDisabled}
              text={"정보저장하기"}
              onClick={handleSubmit}
            />
          </ButtonWrapper>
        </>
      )}
    </InitializationFormContainer>
  );
};

export default InitializationForm;

const InitializationFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 100%; */
`;
const InitializationInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;

const ButtonWrapper = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;
