import React from "react";
import { PersonStandingIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <h1 className="flex gap-2">
        <PersonStandingIcon size={50} className="text-pink-500" />
        Support Me
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className="flex gap-2 items-center">
        <Button >
          {/* <Link href="/login">Log in</Link> */}
          hello
        </Button>
        <small>or</small>
        <Button  variant="outline">
          hello
          {/* <Link href="/sign-up">Sign up</Link> */}
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
