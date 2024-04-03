import React from "react";
import Link from "next/link";
import {
  ListChecksIcon,
  PartyPopperIcon,
  PieChart,
  StarIcon,
  UsersIcon,
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
import xx from "@/public/images/xx.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TeamDistributionChart from "./team-distribution-chart";
import SupportTicketsResolved from "./support-tickets-resolved";

const teamLeaders = [
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "zw",
    lastName: "z",
    avatar: zz,
  },
  {
    firstName: "wx",
    lastName: "y",
    avatar: xx,
  },
  {
    firstName: "xxg",
    lastName: "w",
  },
  {
    firstName: "ab",
    lastName: "c",
  },
  {
    firstName: "xy",
    lastName: "z",
  },
];

const TeamsStats = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader, i) => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}-${i}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="cursor-pointer">
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName} 's avatar`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team distribution</span>
              <PieChart />
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
};

export default TeamsStats;
