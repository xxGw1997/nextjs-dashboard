import React from "react";
import Link from "next/link";
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from "lucide-react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import zz from "@/public/images/zz.png";
import WorkLocationTrends from "./work-location-trends";

const EmployeesStats = () => {
  const totalEmployees = 100;
  const employeesPresent = 80;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">{totalEmployees}</div>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Employees present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              {employeesPresentPercentage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <div className="text-5xl font-bold">{employeesPresent}</div>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentPercentage > 75 ? (
              <span className="text-xs text-green-500 flex gap-1 items-center">
                <BadgeCheckIcon />
                {employeesPresentPercentage}% of employees are present
              </span>
            ) : (
              <span className="text-xs text-red-500 flex gap-1 items-center">
                <AlertTriangleIcon />
                Only {employeesPresentPercentage}% of employees are present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className="border-pink-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <Image src={zz} alt="Employees of the month avatar" />
              <AvatarFallback>WX</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Zi Wei Zhu</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className="text-pink-500" />
            <span>Congratulations, Zzw!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeesStats;
