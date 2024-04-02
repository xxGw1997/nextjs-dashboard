import React from "react";

import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";

const MainMenu = () => {
  return (
    <div className="bg-muted overflow-auto p-4">
      <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </div>
      <div className="py-4">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>
    </div>
  );
};

export default MainMenu;
