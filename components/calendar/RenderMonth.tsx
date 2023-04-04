import React from "react";
import styled, { css } from "styled-components";
import RenderDay from "./RenderDay";
interface IRenderMonthProps {
  monthList: any;
  onClick: any;
}
const RenderMonth = ({ monthList, onClick }: IRenderMonthProps) => {
  const handleClick = (item: any) => {
    console.log(item.date);
    onClick(item.date);
  };
  return (
    <RenderDayView>
      {monthList.map((el: any, idx: any) => (
        <>
          <RenderDayWrapper onClick={() => handleClick(el)} key={idx}>
            <RenderDay date={el} />
          </RenderDayWrapper>
        </>
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
