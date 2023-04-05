import React, { Dispatch, SetStateAction } from "react";
import { format, addMonths, subMonths } from "date-fns";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
interface IRenderHeader {
  baseDay: Date;
  onMonthChangeClick: (direction: string) => void;
}
const INITDAY = 10;
const RenderHeader = ({ baseDay, onMonthChangeClick }: IRenderHeader) => {
  if (baseDay.getDate() < INITDAY) {
    baseDay = subMonths(baseDay, 1);
  }
  return (
    <RenderHeaderContainer>
      <ArrowBackIcon onClick={() => onMonthChangeClick("prev")} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: 12 }}>
          {format(baseDay, "MMM")}/{format(addMonths(baseDay, 1), "MMM")}
        </div>
        <div>
          {format(baseDay, "Y")}
          {format(baseDay, "Y") !== format(addMonths(baseDay, 1), "Y") && (
            <span>/ {format(addMonths(baseDay, 1), "Y")}</span>
          )}
        </div>
      </div>
      <ArrowForwardIcon onClick={() => onMonthChangeClick("next")} />
    </RenderHeaderContainer>
  );
};

export default RenderHeader;

const RenderHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
