import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SWRConfig } from "swr";
import App from "./App";
import { baseUrl } from "./config";
import "./index.css";
import { Auth, Register } from "./pages/auth";
import { UserList } from "./pages/user-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/login",
        element: <Auth />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (url: string, init) =>
          fetch(`${baseUrl}/${url}`, init).then((res) => res.json()),
      }}
    >
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>
);
