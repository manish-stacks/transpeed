"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts";
import { useTheme } from "next-themes";

export function AreaChartComponent({ data, title, dataKey }) {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  const textColor = isDarkTheme ? "hsl(0, 0%, 83.1%)" : "hsl(0, 0%, 45.1%)";
  const gridColor = isDarkTheme ? "hsl(0, 0%, 14.9%)" : "hsl(0, 0%, 89.8%)";

  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm">
      <div className="text-base font-medium text-gray-800 dark:text-gray-100 mb-4">
        {title}
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="name" tick={{ fill: textColor }} />
            <YAxis tick={{ fill: textColor }} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkTheme ? "hsl(0, 0%, 10%)" : "white",
                borderColor: gridColor,
              }}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke="hsl(var(--chart-1))"
              fillOpacity={1}
              fill="url(#colorData)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function BarChartComponent({ data, title }) {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  const textColor = isDarkTheme ? "hsl(0, 0%, 83.1%)" : "hsl(0, 0%, 45.1%)";
  const gridColor = isDarkTheme ? "hsl(0, 0%, 14.9%)" : "hsl(0, 0%, 89.8%)";

  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm">
      <div className="text-base font-medium text-gray-800 dark:text-gray-100 mb-4">
        {title}
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="name" tick={{ fill: textColor }} />
            <YAxis tick={{ fill: textColor }} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkTheme ? "hsl(0, 0%, 10%)" : "white",
                borderColor: gridColor,
              }}
            />
            <Legend />
            <Bar dataKey="blogs" fill="hsl(var(--chart-2))" />
            <Bar dataKey="pages" fill="hsl(var(--chart-3))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
