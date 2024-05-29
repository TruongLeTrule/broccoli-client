import React from "react";

const MealList = () => {
  const mealInfo = [
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
    {
      img: <img src="src\assets\tam.png" alt="" />,
      name: "Tên món ăn",
      time: "1",
      serving: "1",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-10 px-32 mx-auto max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
      {mealInfo.map((meal, i) => (
        <a
          href="/mealDetail"
          key={i}
          className="px-5 py-5 border-2 border-primaryColor text-center rounded-lg focus:cursor-pointer"
        >
          <div className="px-5 py-5">{meal.img}</div>
          <div className="px-2 py-2">{meal.name}</div>
          <div>
            {meal.time}h | {meal.serving} phần ăn
          </div>
        </a>
      ))}
    </div>
  );
};

export default MealList;
