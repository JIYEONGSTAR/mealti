import Input from "components/ui/Input";
import React, { ChangeEvent, useState } from "react";
import DragAndDrop from "components/ui/DragAndDrop";
import styled from "styled-components";
import ButtonForm from "components/ui/ButtonForm";
import BoldText from "components/ui/BoldText";
import useCurrentUser from "hooks/useCurrentUser";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "firebase/clientApp";
interface FormInput {
  date: string;
  menu: string;
  cost: number;
  location: string;
  restaurant: string;
  content: string;
}
const RegisterForm = () => {
  const { currentUser } = useCurrentUser();
  const [form, setForm] = useState<FormInput>({
    date: new Date().toJSON(),
    menu: "",
    cost: 0,
    location: "",
    restaurant: "",
    content: "",
  });
  const { date, menu, cost, location, restaurant, content } = form;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = async () => {
    // 그러나 문서에 유의미한 ID를 두지 않고 Cloud Firestore에서 자동으로 ID를 생성하도록 하는 것이 편리한 때도 있습니다. 이렇게 하려면 다음과 같은 언어별 add() 메서드를 호출하면 됩니다.
    await addDoc(collection(firestore, "posts"), {
      date,
      menu,
      cost,
      location,
      restaurant,
      content,
      uid: currentUser.id,
    }).then((res) => console.log(res));
  };
  return (
    <RegisterFormContainer>
      <BoldText fontSize={20}>오늘의 식사 기록하기</BoldText>
      <RegisterFormWrapper>
        <Input
          name="date"
          label="날짜"
          value={date}
          type="date"
          onUpdateValue={handleChange}
          size="small"
          isRow
        />
        <Input
          name="menu"
          label="메뉴명"
          value={menu}
          onUpdateValue={handleChange}
          size="small"
          isRow
        />
        <Input
          name="cost"
          label="가격"
          type="number"
          value={cost}
          onUpdateValue={handleChange}
          size="small"
          isRow
        />
        <Input
          name="location"
          label="위치"
          value={location}
          onUpdateValue={handleChange}
          size="small"
          isRow
        />
        <Input
          name="restaurant"
          label="식당이름"
          value={restaurant}
          onUpdateValue={handleChange}
          size="small"
          isRow
        />
        <Input
          name="content"
          label="메모"
          value={content}
          onUpdateValue={handleChange}
        />
        <ButtonWrapper>
          <ButtonForm text={"저장하기"} onClick={handleClick} />
        </ButtonWrapper>
      </RegisterFormWrapper>
    </RegisterFormContainer>
  );
};

export default RegisterForm;

const RegisterFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterFormWrapper = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.color.backgroundColor};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;
