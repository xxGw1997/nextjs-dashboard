"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href: string;
};

const MenuItem = ({ children, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        className={cn(
          "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
          isActive &&
            "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground"
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
