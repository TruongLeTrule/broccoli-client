import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const COLORS = ['#FFB534', '#00c722', '#007336'];

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
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CaloriesChart = ({ nutrients }) => {
  const handleRenderData = (data) =>
    data
      .map(({ nutrientId, nutrientValue }) => {
        const nutrient = { name: '', value: nutrientValue };
        switch (nutrientId) {
          case 2:
            nutrient.name = 'Protein';
            break;
          case 3:
            nutrient.name = 'Fat';
            break;
          case 4:
            nutrient.name = 'Carbs';
            break;
        }
        return nutrient;
      })
      .filter(({ name }) => name !== '');

  return (
    <div className="w-64 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={handleRenderData(nutrients)}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#00c722"
          >
            {handleRenderData(nutrients).map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CaloriesChart;
