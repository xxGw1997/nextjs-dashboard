"use client";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SupportTicketsResolved = () => {
  const data = [
    {
      name: "Jan",
      delta: 82,
      alpha: 44,
      canary: 11,
    },
    {
      name: "Feb",
      delta: 12,
      alpha: 52,
      canary: 11,
    },
    {
      name: "Mar",
      delta: 14,
      alpha: 44,
      canary: 11,
    },
    {
      name: "Apr",
      delta: 82,
      alpha: 44,
      canary: 11,
    },
    {
      name: "May",
      delta: 82,
      alpha: 44,
      canary: 11,
    },
    {
      name: "Jun",
      delta: 82,
      alpha: 44,
      canary: 11,
    },
    {
      name: "Jul",
      delta: 82,
      alpha: 44,
      canary: 11,
    },
    {
      name: "Aug",
      delta: 49,
      alpha: 61,
      canary: 11,
    },
    {
      name: "Sep",
      delta: 44,
      alpha: 70,
      canary: 11,
    },
    {
      name: "Oct",
      delta: 40,
      alpha: 40,
      canary: 11,
    },
    {
      name: "Nov",
      delta: 50,
      alpha: 44,
      canary: 11,
    },
    {
      name: "Dec",
      delta: 20,
      alpha: 60,
      canary: 11,
    },
  ];
  return (
    <ResponsiveContainer height={350} width="100%">
      <LineChart data={data}>
        <Tooltip
          labelClassName="font-bold"
          wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border"
        />
        <XAxis fontSize={12} dataKey="name" stroke="#888888" />
        <YAxis fontSize={12} stroke="#888888" />
        <CartesianGrid strokeDasharray="3" />
        <Line type="monotone" dataKey="delta" stroke="#84cc16" />
        <Line type="monotone" dataKey="alpha" stroke="#eeaadd" />
        <Line type="monotone" dataKey="canary" stroke="#1188dd" />
        <Legend
          formatter={(value) => <span className="capitalize">{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SupportTicketsResolved;
