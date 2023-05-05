import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import BoldText from "components/ui/BoldText";
import useCurrentUser from "hooks/useCurrentUser";
import { useEffect, useState } from "react";
import ButtonForm from "components/ui/ButtonForm";
import { useRouter } from "next/router";
import RadiousLayout from "../ui/RadiousWrapper";
import Image from "next/image";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useUserInfo } from "hooks/useUser";
const MainContainer = () => {
  const router = useRouter();
  const { currentUser } = useCurrentUser();
  useUserInfo(currentUser.id);
  return (
    <MainWrapper>
      <WelcomeWrapper>
        <WelcomeTextWrapper>
          <BoldText fontSize={30}>{currentUser.name} 님, </BoldText>
          <div style={{ fontSize: "1.5rem" }}>식사 하셨나요?</div>
        </WelcomeTextWrapper>
        <WelcomeIconWrapper>
          <RestaurantIcon sx={{ width: 100, height: 100 }} />
        </WelcomeIconWrapper>
      </WelcomeWrapper>
      <RadiousLayout>
        <PostWrapper>
          <HalfWrapper>
            <div>
              <BoldText fontSize={18}>밀티</BoldText>
              <span>로 오늘의 식사를 기록해보세요</span>
            </div>
            <ButtonForm
              text=" 식비 가계부 보러가기 →"
              onClick={() => {
                router.push("/meal");
              }}
            />
          </HalfWrapper>
          <HalfWrapper>
            <div>
              뭐 먹을지 <BoldText>고민</BoldText> 된다면?
            </div>
            <ButtonForm
              text="레시피 추천 받으러 가기 →"
              onClick={() => {
                router.push("/recipe");
              }}
            />
          </HalfWrapper>
        </PostWrapper>
      </RadiousLayout>
    </MainWrapper>
  );
};

export default MainContainer;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WelcomeWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.textColor};
  padding: 3rem;
`;
const PostWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const HalfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  gap: 1rem;
`;
const WelcomeTextWrapper = styled.div`
  display: flex;
  flex: 1.5;
  flex-direction: column;
`;
const WelcomeIconWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;
