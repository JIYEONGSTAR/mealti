import { QueryClient } from "react-query";

function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const id = "react-query-error";
  const title =
    error instanceof Error ? error.message : "error connecting to server";

  // prevent duplicate toasts
  alert("react-query-error");
}

// to satisfy typescript until this file has uncommented contents

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,

      // 밑에있는 옵션을 매번 사용하기는 권하지 않음
      staleTime: 600000, // 10min
      cacheTime: 900000, // 15min(don't make sense for staleTime to exceed cachetime)
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});
