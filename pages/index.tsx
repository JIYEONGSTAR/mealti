import styled from "styled-components";
import BoldText from "components/ui/BoldText";
import useCurrentUser from "hooks/useCurrentUser";
import { useEffect, useState } from "react";
import ButtonForm from "components/ui/ButtonForm";
import { useRouter } from "next/router";
import { fireAuth } from "firebase/clientApp";
export default function Home() {
  const router = useRouter();
  const { currentUser } = useCurrentUser();

  return (
    <MainWrapper>
      <WelcomeWrapper>
        <div>
          <picture>
            <img src="/mainDish.png" alt="" />
          </picture>
        </div>
        <div>
          <BoldText fontSize={25}>{currentUser.name}님, </BoldText>
          <div>식사는 하셨나요?</div>
        </div>
      </WelcomeWrapper>
      <PostWrapper>
        <HalfWrapper>
          <div>
            <BoldText fontSize={18}>밀티</BoldText>
            <span>로 오늘의 식사기록을</span>
            <div> 확인해보세요!</div>
          </div>
          <div>
            <ButtonForm
              text=" 식비 가계부 보러가기 →"
              onClick={() => {
                router.push("/meal");
              }}
              buttonColor="white"
              color="black"
            />
          </div>
        </HalfWrapper>
        <button
          onClick={() => {
            console.log("logout");
            fireAuth.signOut();
          }}
        >
          로그아웃
        </button>
        {/* <HalfWrapper>
          <div>
            뭐 먹을지 <BoldText>고민</BoldText> 된다면?
          </div>
          <div>
            <ButtonForm
              text="레시피 추천 받으러 가기 →"
              onClick={() => {
                router.push("/recipe");
              }}
              buttonColor="white"
              color="black"
            />
          </div>
        </HalfWrapper> */}
      </PostWrapper>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WelcomeWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
const PostWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const HalfWrapper = styled.div`
  flex: 1;
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
`;
