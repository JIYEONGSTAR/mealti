import useTheme from "hooks/useTheme";
import React, { ReactNode } from "react";
import { lightTheme, darkTheme } from "theme";
import { ThemeProvider as CustomThemeProvider } from "styled-components";

interface Props {
  children: ReactNode;
}

const defaultValue = {
  theme: "light",
  onChangeTheme: () => {},
};

export const CustomThemeContext = React.createContext(defaultValue);

const ThemeProvider = ({ children }: Props) => {
  const themeProps = useTheme();
  return (
    <CustomThemeContext.Provider value={themeProps}>
      <CustomThemeProvider
        theme={themeProps.theme === "light" ? lightTheme : darkTheme}
      >
        {children}
      </CustomThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default ThemeProvider;
