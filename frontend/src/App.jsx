import React from "react";
import SingInPage from "./pages/SingInPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    { path: "/signin", element: <SingInPage /> },
    { path: "/signup", element: <SignUpPage /> },
  ]);

  return (
    <>
      {/* <SingInPage /> */}

      {/* <SignUpPage /> */}

      <RouterProvider router={router} />
    </>
  );
};

export default App;
