import React from "react";
import { EMeal } from "types";
import Image from "next/image";
import styled from "styled-components";
const SquareLog = ({ item }: { item: EMeal }) => {
  console.log(item);
  return (
    <SquareLogContainer>
      {item.image ? (
        <Image
          src={item.image}
          alt=""
          width={80}
          height={80}
          style={{
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      ) : (
        <div>{item.menu}</div>
      )}
      <div>{item.cost}원</div>
    </SquareLogContainer>
  );
};

export default SquareLog;

const SquareLogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 7rem;
  border: 4px solid ${({ theme }) => theme.color.subColor};
  border-radius: 20px;
  margin: 10px;
`;
