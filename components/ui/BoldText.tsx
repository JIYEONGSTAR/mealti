import React from "react";

interface BoldTextProps {
  children: React.ReactNode;
  fontSize: number;
}
const BoldText = ({ children, fontSize }: BoldTextProps) => {
  return (
    <span style={{ fontWeight: "bold", fontSize: fontSize }}>{children}</span>
  );
};

export default BoldText;
