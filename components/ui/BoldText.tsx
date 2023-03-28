import React from "react";
const BoldText = ({ children, fontSize }: any) => {
  return (
    <span style={{ fontWeight: "bold", fontSize: fontSize }}>{children}</span>
  );
};

export default BoldText;
