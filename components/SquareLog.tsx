import React from "react";
import { EMeal } from "types";

const SquareLog = ({ item }: { item: EMeal }) => {
  console.log(item);
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
      <picture>
        <img width="120px" height="120px" src={item.image?.[0]} alt="" />
      </picture>
      <div>{item.cost}원</div>
    </div>
  );
};

export default SquareLog;
