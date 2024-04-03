import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeesStats from "../_components/employees/employees-stats";
import TeamsStats from "../_components/teams/teams-stats";

const DashboardPage = () => {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Team stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsStats />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
