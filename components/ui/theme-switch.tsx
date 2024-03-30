"use client";

import React, { useState } from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./tooltip";
import { MoonIcon, SunIcon } from "lucide-react";
import { TooltipContent } from "@radix-ui/react-tooltip";

type Props = {
  className?: string;
};

const ThemeSwitch = ({ className }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode((preValue) => !preValue);
            document.body.classList.toggle("dark");
          }}
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? "Enable light mode" : "Enable dark mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeSwitch;
