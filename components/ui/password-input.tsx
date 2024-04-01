"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <Input
          ref={ref}
          type={showPassword ? "text" : "password"}
          {...props}
          className={cn("pr-10", className)}
        />
        <span
          className="absolute top-[7px] right-1 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </span>
      </div>
    );
  }
);
PasswordInput.displayName = "Input";

export { PasswordInput };
