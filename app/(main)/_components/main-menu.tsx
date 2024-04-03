import React from "react";
import Link from "next/link";

import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeSwitch from "@/components/ui/theme-switch";
import { cn } from "@/lib/utils";

const MainMenu = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn("md:bg-muted overflow-auto p-4 flex flex-col h-full", className)}
    >
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/teams">Teams</MenuItem>
        <MenuItem href="/employees">Employees</MenuItem>
        <MenuItem href="/account">Account</MenuItem>
        <MenuItem href="/settings">Settings</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            WX
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <ThemeSwitch className="ml-auto" />
      </footer>
    </nav>
  );
};

export default MainMenu;
