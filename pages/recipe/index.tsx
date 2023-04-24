import React from "react";
import styled from "styled-components";
import { recipes } from "dummy-data";
import RecipeGridItem from "components/recipe/RecipeGridItem";
const index = () => {
  return (
    <RecipeWrapper>
      <h1>레시피</h1>
      <p>원하는 음식 종류 중 하나를 선택해주세요</p>
      <RecipeContainer>
        {recipes.map((el) => (
          <RecipeGridItem item={el} key={el.id}></RecipeGridItem>
        ))}
      </RecipeContainer>
    </RecipeWrapper>
  );
};

export default index;

const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > h1,
  > p {
    padding: 0 20px;
  }
  padding: 20px;
`;

const RecipeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
