import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const COLORS = ['#00c722', '#FFB534', '#007336'];

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

const CaloriesChart = ({ data }) => {
  const handleNutrients = (nutrientData) => {
    const result = nutrientData
      .filter(({ nutrientId }) => nutrientId !== 1 && nutrientId !== 5)
      .map(({ nutrientName, nutrientValue }) => ({
        name: nutrientName,
        value: nutrientValue,
      }));

    console.log('chart============', result);
    return result;
  };

  return (
    <div className="w-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={handleNutrients(data)}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#00c722"
          >
            {handleNutrients(data).map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

CaloriesChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CaloriesChart;
