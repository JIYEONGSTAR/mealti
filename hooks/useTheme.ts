import { useCallback, useLayoutEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  const onChangeTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  // 사용자가 시스템 설정으로 다크모드를 사용하고 있다면
  useLayoutEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  return {
    theme,
    onChangeTheme,
  };
}

export default useTheme;
