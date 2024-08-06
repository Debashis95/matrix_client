import React from "react";
import MatrixCalculator from "./components/MatrixCalculator";
import "./App.css";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthRouter from "./middleware/AuthRouter";
import Dashboard from "./components/Dashboard";
import UserPerformance from "./components/UserPerfomance";
import EmailVerification from "./components/EmailVerification";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/verify-email/:token",
      element: <EmailVerification />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      element: <AuthRouter />,
      children: [
        {
          path: "/",
          element: <MatrixCalculator />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/performance",
          element: <UserPerformance />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
