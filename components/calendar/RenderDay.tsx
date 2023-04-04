import React from "react";
import styled from "styled-components";
type dateType = {
  date: Date;
  isShow: boolean;
};
interface IRenderDayProps {
  date: dateType;
}
const RenderDay = ({ date }: IRenderDayProps) => {
  const dateTime = date.date.toISOString().split("T")[0];

  return (
    <RenderDayView>
      <RenderDayText isShow={date.isShow}>{date.date.getDate()}</RenderDayText>
      <RenderDayText
        isShow={date.isShow}
        colored={true}
        fontSize={"9px"}
      ></RenderDayText>
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
    isShow ? (colored ? theme.color.subColor : theme.color.textColor) : "gray"};
  opacity: ${({ isShow }) => (isShow ? 1 : 0.5)};
  text-align: center;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
`;
