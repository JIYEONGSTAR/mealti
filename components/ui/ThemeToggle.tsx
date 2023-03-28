import React from "react";
import styled from "styled-components";
function ThemeToggle({
  onChangeColorMode,
  isDark,
}: {
  onChangeColorMode: () => void;
  isDark: boolean;
}) {
  return (
    <ToggleWrapper onClick={onChangeColorMode} mode={isDark}>
      {isDark ? "🌕" : "🌞"}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.button<{ mode: boolean }>`
  background-color: ${(props) => props.theme.color.backgroundColor};
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 0px 0.5px 2px grey;
`;
