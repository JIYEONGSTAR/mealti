import React, { useState, useEffect } from "react";
import { calendarDate } from "components/calendar/calendarDate";
import { addMonths, subMonths } from "date-fns";
import { RenderHeader, RenderDays, RenderMonth } from "components/calendar";

import styled, { ThemeContext } from "styled-components";
import BoldText from "components/ui/BoldText";
import SquareLog from "components/SquareLog";

import { EMeal, UserInfo } from "types";
import useCurrentUser from "hooks/useCurrentUser";
import { useUserInfo } from "hooks/useUser";

interface AccountMonthProps {
  meal: EMeal[];
}
const AccountMonth = ({ meal }: AccountMonthProps) => {
  const { currentUser } = useCurrentUser();
  const userInfo = useUserInfo(currentUser.id) as UserInfo;
  const offset = 1000 * 60 * 60 * 9; //한국 시간으로 바꾸기 위해

  const [selectedDay, setSelectedDay] = useState(
    new Date(new Date().getTime() + offset).toISOString().split("T")[0]
  ); //밑에 보여줄 선택된 날짜

  const [todayAccount, setTodayAccount] = useState<EMeal[]>(); //오늘의 기록

  const INITDAY = userInfo.initialDate;

  const today = new Date(new Date().getTime() + offset);

  const [baseDay, setBaseDay] = useState(new Date(today)); // 달력의 기반이 되는 날짜

  const [monthList, setMonthList] = useState<any>(
    calendarDate({ date: baseDay, INITDAY }).datesOfMonth
  ); // 월별 달력에 넘길 데이터

  const handleArrowPress = (direction: string) => {
    if (direction === "prev") {
      setBaseDay(subMonths(baseDay, 1));
    } else {
      setBaseDay(addMonths(baseDay, 1));
    }
  };

  useEffect(() => {
    setMonthList(calendarDate({ date: baseDay, INITDAY }).datesOfMonth);
  }, [baseDay]);

  useEffect(() => {
    setTodayAccount(
      meal.filter(
        (el) => el.date.toDate().toISOString().slice(0, 10) === selectedDay
      )
    );
  }, [selectedDay, meal]);
  return (
    <AccountMonthWrapper>
      <CalendarWrapper>
        <CalendarBorderWrapper>
          <RenderHeader
            onMonthChangeClick={handleArrowPress}
            baseDay={baseDay}
          />
          <RenderDays />
          <RenderMonth
            monthList={monthList}
            onClick={(date) => {
              return setSelectedDay(date);
            }}
            selectedDay={selectedDay}
            meal={meal}
          />
        </CalendarBorderWrapper>
      </CalendarWrapper>
      <LogWrapper>
        <div>{selectedDay}의 나의식사기록</div>
        {todayAccount?.length !== 0 ? (
          <FlatList>
            {todayAccount?.map((el, idx) => (
              <SquareLog item={el} key={idx} />
            ))}
          </FlatList>
        ) : (
          <BoldText fontSize={20}>기록을 추가해주세요</BoldText>
        )}
      </LogWrapper>
    </AccountMonthWrapper>
  );
};

export default AccountMonth;

const AccountMonthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 5.5vh;
`;

const CalendarWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.subColor};
  border-radius: 15px;
  width: 90%;
  height: 95%;
  /* overflow-x: auto; */
  margin: 10px;
`;

const CalendarBorderWrapper = styled.div`
  margin: 10px;
  width: 95%;
  height: 95%;
  /* overflow-x: auto; */
  background-color: ${({ theme }) => theme.color.backgroundColor};
  border-width: 1;
  border-radius: 15px;
`;
const LogWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const FlatList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 90%;
`;
