import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "theme";
import "styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // 라이트모드 다크모드
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);
  useEffect(() => {
    // 로그인 안되어있으면 페이지 리다이렉트
    const userInfo = !localStorage.getItem("user") ? false : true;
    console.log(userInfo);
    // router.pathname.startsWith("/login")
    if (!router.pathname.startsWith("/login") && !userInfo)
      router.push("/login");
  }, []);
  if (router.pathname.startsWith("/login")) {
    return (
      <RecoilRoot>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    );
  }
  return (
    <RecoilRoot>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Layout onChangeColorMode={_toggleSwitch} isDark={isDark}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}
