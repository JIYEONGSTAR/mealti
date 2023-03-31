import Input from "components/ui/Input";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import ButtonForm from "components/ui/ButtonForm";
import BoldText from "components/ui/BoldText";
import useCurrentUser from "hooks/useCurrentUser";
import { collection, addDoc } from "firebase/firestore";
import { firestorage, firestore } from "firebase/clientApp";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid"; //firebase image upload용 id
interface FormInput {
  date: string;
  menu: string;
  cost: number;
  location: string;
  restaurant: string;
  content: string;
  image: string;
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
    image: "",
  });
  const { date, menu, cost, location, restaurant, content, image } = form;
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
  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files;
      const storageRef = ref(firestorage, uuidv4());
      // await uploadBytes(storageRef, files[0]).then((el) =>
      //   console.log("image", el)
      // );
      const uploadTask = uploadBytesResumable(storageRef, files[0]);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          progress === 100 && alert("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setForm({ ...form, image: downloadURL });
          });
        }
      );
    }
  };
  return (
    <RegisterFormContainer>
      <RegisterFormTitleWraper>
        <BoldText fontSize={20}>오늘의 식사 기록하기</BoldText>
      </RegisterFormTitleWraper>
      <RegisterFormWrapper>
        {image ? (
          <ImageLabel htmlFor="imageInput">
            <Image src={image} width={100} height={100} alt="" />
          </ImageLabel>
        ) : (
          <ImageLabel htmlFor="imageInput">
            <Image src="/camera.png" width={100} height={100} alt="" />
          </ImageLabel>
        )}
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          hidden
        />
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
  background-color: ${({ theme }) => theme.color.backgroundColor};
`;
const RegisterFormTitleWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
const RegisterFormWrapper = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.color.mainColor};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
`;

const ImageLabel = styled.label`
  width: 100px;
  height: 100px;
  border: 1px dashed ${({ theme }) => theme.color.mainColor};
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
