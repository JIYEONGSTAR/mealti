import React from "react";
import styled from "styled-components";

const RenderDays = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <RenderDaysWrapper>
      {days.map((el: string) => (
        <RenderDaysContainer key={el}>{el}</RenderDaysContainer>
      ))}
    </RenderDaysWrapper>
  );
};

export default RenderDays;

const RenderDaysWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 0.5rem 0;
`;

const RenderDaysContainer = styled.div`
  display: flex;
  justify-content: center;
`;
