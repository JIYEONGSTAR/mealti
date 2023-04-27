import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import ThemeProvider from "context/ThemeProvider";
import { fireAuth } from "firebase/clientApp";
import GlobalStyle from "styles/globalStyle";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "react-query/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // 라이트모드 다크모드

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
  }, [isLogin]);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <GlobalStyle />
            {router.pathname.startsWith("/auth") ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </ThemeProvider>
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
