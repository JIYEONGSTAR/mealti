import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import ThemeProvider from "context/ThemeProvider";
import GlobalStyle from "styles/globalStyle";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "react-query/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthChecker from "../components/auth/AuthChecker";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider>
            <GlobalStyle />
            <AuthChecker>
              {router.pathname.startsWith("/auth") ? (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </AuthChecker>
          </ThemeProvider>
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
