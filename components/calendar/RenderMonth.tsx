import React from "react";
import styled, { css } from "styled-components";
import RenderDay from "./RenderDay";

import { useMeal } from "hooks/useMeal";
import useCurrentUser from "hooks/useCurrentUser";
import { Meal, EMeal } from "types";

interface DateShow {
  date: Date;
  isShow: boolean;
}
interface IRenderMonthProps {
  monthList: DateShow[];
  onClick: React.Dispatch<React.SetStateAction<string>>;
  meal: EMeal[];
  selectedDay: string;
}
const RenderMonth = ({
  monthList,
  onClick,
  meal,
  selectedDay,
}: IRenderMonthProps) => {
  // const { currentUser } = useCurrentUser();

  // const startDate = monthList[0].date.toISOString().split("T")[0];
  // const endDate = monthList.slice(-1)[0].date.toISOString().split("T")[0];

  // const meal = useMeal(currentUser.id, startDate, endDate);

  const handleClick = (date: string) => {
    onClick(date);
  };

  return (
    <RenderDayView>
      {monthList.map((el, idx) => (
        <RenderDayWrapper
          key={el.date.toISOString()}
          onClick={() => handleClick(el.date.toISOString().split("T")[0])}
          isSelected={selectedDay === el.date.toISOString().split("T")[0]}
        >
          <RenderDay date={el} meal={meal} />
        </RenderDayWrapper>
      ))}
    </RenderDayView>
  );
};

export default RenderMonth;

const RenderDayView = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 80%;
`;

const RenderDayWrapper = styled.div<{ isSelected: boolean }>`
  /* color: ${({ isSelected }) => isSelected && "red"}; */
  font-weight: ${({ isSelected }) => isSelected && "bold"};
  font-size: ${({ isSelected }) => isSelected && "1.6rem"};
  cursor: pointer;
  border: ${({ isSelected, theme }) =>
    isSelected &&
    css`
      width: 100%;
      height: 80%;
      font-weight: bold;
      font-size: 1.6rem;
      border: 1px solid ${theme.color.subColor};
      border-radius: 50px;
      padding: 1px;
    `};
`;
