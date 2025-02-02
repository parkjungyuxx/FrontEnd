import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import DNLayout from './layouts/layout'
import MultyLayout from './layouts/multiLayout'
import SignInPage from './pages/signInPage'
import SignUpPage from './pages/signUpPage'
import HomePage from './pages/homePage'
import AuthGuard from './routes/guard/authGurad'

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
        <RouterProvider router={createBrowserRouter([
          {
            element: 
                <AuthGuard>
                  <DNLayout/>
                </AuthGuard>,
            children: [
              {
                index: true,
                element: <HomePage/>
              }
            ]
          },
          {
            element: <MultyLayout/>,
            children: [
              {
                path: '/auth/sign-in',
                element: <SignInPage/>
              },
              {
                path: '/auth/sign-up',
                element: <SignUpPage/>
              },
            ]
          }
        ])}/>
    </QueryClientProvider>
  )
}

export default App
