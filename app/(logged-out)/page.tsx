import React from "react";
import { PersonStandingIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <h1 className="flex gap-2">
        <PersonStandingIcon size={50} className="text-pink-500" />
        SupportMe
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className="flex gap-2 items-center">
        <Button >
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button  variant="outline">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
