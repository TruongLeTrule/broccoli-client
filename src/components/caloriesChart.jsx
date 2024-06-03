import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  {
    name: "Carbs",
    value: 100,
  },
  {
    name: "Protein",
    value: 200,
  },
  {
    name: "Fats",
    value: 150,
  },
];

const RADIAN = Math.PI / 180;
const COLORS = ["#FFB534", "#00c722", "#007336"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CaloriesChart = () => {
  return (
    <div className="w-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#00c722"
          >
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CaloriesChart;
