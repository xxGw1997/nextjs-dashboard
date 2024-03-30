import React from "react";

type Props = {
  children?: React.ReactNode;
};

const LoggedOutLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center p-24 justify-center">
      {children}
    </div>
  );
};

export default LoggedOutLayout;
