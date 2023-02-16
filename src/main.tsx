import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SWRConfig } from "swr";
import App from "./App";
import { baseUrl } from "./config";
import "./index.css";
import { Auth, Register } from "./pages/auth";
import { Profile } from "./pages/profile";
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
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (url: string, init) => {
          const token = localStorage.getItem("token");
          const headers = init?.headers || {};
          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
          }
          return fetch(`${baseUrl}/${url}`, {
            ...init,
            headers,
          }).then((res) => res.json());
        },
      }}
    >
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>
);
