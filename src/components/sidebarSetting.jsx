import React from "react";
import { Link, NavLink } from "react-router-dom";

const SidebarSetting = () => {
  const sidebar = [
    {
      name: "Mục tiêu dinh dưỡng",
      path: "/nutritionTargets",
    },
    {
      name: "Chế độ ăn chính",
      path: "/primaryDiet",
    },
    {
      name: "Thực phẩm cần loại trừ",
      path: "/foodExclusions",
    },
    {
      name: "Thực phẩm yêu thích",
      path: "/likedFoods",
    },
    {
      name: "Thực phẩm không thích",
      path: "/BlockedFoods",
    },
    {
      name: "Thực đơn đã lưu",
      path: "/savedMeals",
    },
    {
      name: "Chỉ số thể chất",
      path: "/PhysicalStats",
    },
  ];

  return (
    <div className="border border-primaryColor px-10 py-5 rounded-2xl w-[300px]">
      {sidebar.map(({ name, path }) => (
        <li key={name} className="py-3 list-none">
          <Link
            to={path}
            className={({ isActive }) => {
              return !isActive
                ? "border-none py-2 px-2 text-textColor hover:text-primaryColor "
                : "border-b-4 py-2 px-2 text-primaryColor";
            }}
          >
            {name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default SidebarSetting;
