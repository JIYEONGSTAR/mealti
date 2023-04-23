import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Recipe } from "types";
interface RecipeGridItemProps {
  handleClick: () => void;
  item: Recipe;
}
const RecipeGridItem = ({ handleClick, item }: RecipeGridItemProps) => {
  return (
    <RecipeGridItemContainer onClick={() => handleClick()}>
      {item.imageUrl.length !== 0 ? (
        <Image
          src={item.imageUrl}
          alt=""
          width={80}
          height={80}
          style={{
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      ) : (
        <div>{item.title}</div>
      )}
    </RecipeGridItemContainer>
  );
};

export default RecipeGridItem;

const RecipeGridItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 7rem;
  border: 4px solid ${({ theme }) => theme.color.subColor};
  border-radius: 20px;
  margin: 10px;

  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.backgroundColor};
  }
`;
