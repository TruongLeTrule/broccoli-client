import React from "react";

const QuickMeal = () => {
  const Meal = [
    {
      time: "Sáng",
      meal: "abc",
    },
    {
      time: "Trưa",
      meal: "abc",
    },
    {
      time: "Tối",
      meal: "abc",
    },
    {
      time: "Ăn vặt",
      meal: "abc",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-10 pt-10 px-16">
      {Meal.map((meal, i) => (
        <div key={i}>
          <div className=" w-full text-primaryColor font-dancing text-3xl font-semibold">
            {meal.time}:
          </div>
          <div className="text-right">{meal.meal}</div>
        </div>
      ))}
    </div>
  );
};

export default QuickMeal;
