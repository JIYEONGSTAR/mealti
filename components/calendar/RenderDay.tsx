import React from "react";
import styled from "styled-components";
import { Meal } from "types";
import { Timestamp } from "firebase/firestore";
type dateType = {
  date: Date;
  isShow: boolean;
};
interface EMeal extends Omit<Meal, "date"> {
  date: Timestamp;
}
interface IRenderDayProps {
  date: dateType;
  meal?: EMeal[];
}
const RenderDay = ({ date, meal }: IRenderDayProps) => {
  const dateTime = date.date.toISOString().split("T")[0];
  const accountPerDate = meal
    ?.map((el) => [el.date.toDate().toISOString().slice(0, 10), el.cost])
    ?.reduce(
      (acc: number, cur: any) => (cur[0] === dateTime ? acc + cur[1] : acc),
      0
    );

  return (
    <RenderDayView>
      <RenderDayText isShow={date.isShow}>{date.date.getDate()}</RenderDayText>
      <RenderDayText isShow={date.isShow} colored={true} fontSize={"9px"}>
        {date.isShow && accountPerDate}
      </RenderDayText>
    </RenderDayView>
  );
};

export default RenderDay;

const RenderDayView = styled.div`
  flex: 1;
  align-items: center;
`;
const RenderDayText = styled.div<{
  isShow: boolean;
  colored?: boolean;
  fontSize?: string;
}>`
  color: ${({ isShow, colored, theme }) =>
    isShow
      ? colored
        ? theme.color.mainColor
        : theme.color.textColor
      : "gray"};
  opacity: ${({ isShow }) => (isShow ? 1 : 0.5)};
  text-align: center;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
`;
