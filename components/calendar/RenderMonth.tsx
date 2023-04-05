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
}
const RenderMonth = ({ monthList, onClick, meal }: IRenderMonthProps) => {
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

const RenderDayWrapper = styled.div``;
