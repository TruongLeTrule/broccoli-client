import React from "react";

const data = [
  {
    name: "Carbs",
    value: 100,
    target: 100,
  },
  {
    name: "Protein",
    value: 200,
    target: 200,
  },
  {
    name: "Fats",
    value: 150,
    target: 150,
  },
];

const dataUsers = [
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

const calories = {
  title: "Calories",
  value: 1880,
  target: 1900,
};

const CaloriesDetails = () => {
  return (
    <div className="">
      <div className="content-center">
        <div>
          <div className="grid grid-cols-3 gap-10 text-center">
            <div className="py-2">{calories.title}</div>
            <div className="py-2">{calories.value}Cal</div>
            <div className="py-2">~{calories.target}Cal</div>
          </div>
          {data.map((data, i) => (
            <div key={i} className="grid grid-cols-3 gap-10 text-center">
              <div className="py-2">{data.name}</div>
              <div className="py-2">{data.value}g</div>
              <div className="py-2">~{data.target}g</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaloriesDetails;
