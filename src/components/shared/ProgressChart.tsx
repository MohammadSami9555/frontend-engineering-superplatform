"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { phase: "Week 1", completed: 2 },
  { phase: "Week 2", completed: 6 },
  { phase: "Week 3", completed: 10 },
  { phase: "Week 4", completed: 16 },
  { phase: "Week 5", completed: 24 },
];

export default function ProgressChart() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Completion Trend</h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="phase" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#4fea47"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}