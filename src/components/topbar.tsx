import { Menu } from "@headlessui/react";
import { useState } from "react";

export const Topbar = () => {
  const [user, setUser] = useState();
  return (
    <div className="h-12 bg-slate-800 text-white absolute top-0 left-0 right-0 flex justify-between">
      <div>menu</div>
      <div className="p-2">
        {user ? (
          <div>user</div>
        ) : (
          <Menu>
            <Menu.Button>
              <div className="rounded-full bg-slate-300 w-9 h-9" />
            </Menu.Button>
            <Menu.Items className="bg-slate-300 shadow-lg p-4 rounded-md">
              <Menu.Item>
                <a href="/login">Login</a>
              </Menu.Item>
              <Menu.Item>
                <a href="/register">Register</a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        )}
      </div>
    </div>
  );
};
