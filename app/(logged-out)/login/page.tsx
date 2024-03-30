"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginPage = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your SupportMe accout</CardDescription>
        </CardHeader>
        <CardContent>login form</CardContent>
        <CardFooter>
          <small>Don't have a accout</small>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginPage;
