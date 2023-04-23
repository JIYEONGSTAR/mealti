import React from "react";
import styled from "styled-components";
import { recipes } from "dummy-data";
import RecipeGridItem from "components/recipe/RecipeGridItem";
const index = () => {
  return (
    <RecipeWrapper>
      {recipes.map((el) => (
        <RecipeGridItem
          handleClick={() => {}}
          item={el}
          key={el.id}
        ></RecipeGridItem>
      ))}
    </RecipeWrapper>
  );
};

export default index;

const RecipeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
