import React, { useContext } from "react";
import styled from "styled-components";
import { CustomThemeContext } from "context/ThemeProvider";
function ThemeToggle() {
  const { theme, onChangeTheme } = useContext(CustomThemeContext);
  return (
    <ToggleWrapper onClick={onChangeTheme}>
      {theme === "dark" ? "🌕" : "🌞"}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.button`
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
