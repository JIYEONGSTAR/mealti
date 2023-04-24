import InsetBox from "components/ui/InsetBox";
import React from "react";
import styled from "styled-components";
import { Recipe } from "types";
interface RecipeDetailProps {
  item: Recipe;
}

const RecipeDetail = ({ item }: RecipeDetailProps) => {
  return (
    <RecipeDetailContainer>
      <RecipeRow>
        <DetailText>시간: {item.duration}분</DetailText>
        <DetailText>난이도: {item.complexity}</DetailText>
        <DetailText>가격: {item.affordability}</DetailText>
      </RecipeRow>

      <RecipeBox>
        <RecipeRow>
          {item.ingredients.map((el, index) => (
            <span key={el}>
              {el}
              {index !== item.ingredients.length - 1 && ", "}
            </span>
          ))}
        </RecipeRow>
        <br />
        <div>
          {item.steps.map((s, index) => (
            <div key={index}>
              {index + 1}. {s}
            </div>
          ))}
        </div>
      </RecipeBox>
    </RecipeDetailContainer>
  );
};

export default RecipeDetail;

const RecipeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const RecipeRow = styled.div`
  display: flex;
`;
const DetailText = styled.p`
  margin: 0 4px;
  font-size: 12px;
`;

const RecipeBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
