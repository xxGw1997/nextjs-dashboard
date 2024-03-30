import React from "react";

import ThemeSwitch from "@/components/ui/theme-switch";

type Props = {
  children?: React.ReactNode;
};

const LoggedOutLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen items-center p-24 justify-center">
        {children}
        <ThemeSwitch className="fixed top-1/2 right-2 -mt-4" />
      </div>
    </>
  );
};

export default LoggedOutLayout;
