import "./App.css";
import router from "./router";

import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // default value = 0
      gcTime: 1000 * 60 * 5, // default value = 5분, gcTime은 비활ㅅ어화 상태에서만 시간이 갑니다
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initionIsOpen />
    </QueryClientProvider>
  );
}

export default App;
