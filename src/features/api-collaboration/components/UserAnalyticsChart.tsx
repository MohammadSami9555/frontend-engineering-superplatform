"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface UserAnalyticsChartProps {
  totalUsers: number;
  totalCompanies: number;
  filteredUsers: number;
}

export default function UserAnalyticsChart({
  totalUsers,
  totalCompanies,
  filteredUsers,
}: UserAnalyticsChartProps) {
  const data = [
    {
      name: "Users",
      value: totalUsers,
    },
    {
      name: "Companies",
      value: totalCompanies,
    },
    {
      name: "Search",
      value: filteredUsers,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 mb-10">
      <h2 className="text-2xl font-bold mb-6">
        Live Analytics
      </h2>

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="99%" height={350}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />

            <Bar
              dataKey="value"
              fill="#4fea47"
              radius={[12, 12, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}