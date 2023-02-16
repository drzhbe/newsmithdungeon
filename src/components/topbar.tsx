import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../data/auth";

export const Topbar = () => {
  const { user } = useAuth();
  return (
    <div className="h-12 bg-slate-800 text-white absolute top-0 left-0 right-0 flex justify-between">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
      <div className="p-2">
        <Menu>
          <Menu.Button>
            {user && user.name}
            <div className="rounded-full bg-slate-300 w-9 h-9" />
          </Menu.Button>
          <Menu.Items className="bg-slate-300 shadow-lg p-4 rounded-md">
            {user ? (
              <Menu.Item>
                <NavLink to="/profile">Profile</NavLink>
              </Menu.Item>
            ) : (
              <>
                <Menu.Item>
                  <NavLink to="/login">Login</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/register">Register</NavLink>
                </Menu.Item>
              </>
            )}
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};
