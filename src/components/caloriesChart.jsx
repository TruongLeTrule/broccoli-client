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
    <div>
      <div className="grid grid-cols-2 content-between items-baseline pt-10">
        <p className="text-primaryColor font-dancing text-3xl font-semibold pb-5">
          Calories
        </p>
        <p className="ml-auto ">1880</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-20">
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
        <div className="content-center">
          {data.map((data, i) => (
            <div key={i} className="grid grid-cols-2 gap-10">
              <div className="py-4">{data.name}</div>
              <div className="py-4">{data.value}g</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaloriesChart;
