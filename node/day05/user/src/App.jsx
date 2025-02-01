import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DNLayout from "./layouts/layout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider
          router={createBrowserRouter([
            {
              element: <DNLayout />,
              children: [
                {
                  index: true,
                  element: <div>메인</div>,
                },
                {
                  path: "/post",
                  element: <div>게시글</div>,
                },
              ],
            },
            {
              path: "/auth/sign-in",
              element: <SignInPage />,
            },
            {
              path: "/auth/sign-up",
              element: <SignUpPage />,
            },
          ])}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
