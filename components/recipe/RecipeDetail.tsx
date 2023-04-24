import React from "react";
import styled from "styled-components";
import { Recipe } from "types";
interface RecipeDetailProps {
  item: Recipe;
}

const RecipeDetail = ({ item }: RecipeDetailProps) => {
  return (
    <RecipeDetailContainer>
      <DetailText>{item.duration}분</DetailText>
      <DetailText>{item.complexity}</DetailText>
      <DetailText>{item.affordability.toUpperCase()}</DetailText>
      <DetailText>{item.steps}</DetailText>
    </RecipeDetailContainer>
  );
};

export default RecipeDetail;

const RecipeDetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailText = styled.p`
  margin: 0 4px;
  font-size: 12px;
`;
