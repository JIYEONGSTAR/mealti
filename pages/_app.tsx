import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider, css } from "styled-components";
import { lightTheme, darkTheme } from "theme";
import "styles/globals.css";
import { fireAuth } from "firebase/clientApp";
//전역스타일 지정
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
* {
  color : ${(props) => props.theme.color.textColor};
  background-color:"transparent";
  font-family: 'Noto Sans KR', sans-serif;
}`;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // 라이트모드 다크모드

  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }

    fireAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, [isLogin, router]);

  if (router.pathname.startsWith("/auth")) {
    return (
      <RecoilRoot>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    );
  }
  return (
    <RecoilRoot>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Layout onChangeColorMode={_toggleSwitch} isDark={isDark}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}
