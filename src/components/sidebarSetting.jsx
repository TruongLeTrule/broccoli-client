import React from "react";
import { Link, NavLink } from "react-router-dom";

const SidebarSetting = () => {
  const sidebar = [
    {
      name: "Mục tiêu dinh dưỡng",
      path: "/user/nutritionTargets",
    },
    {
      name: "Chế độ ăn chính",
      path: "/user/primaryDiet",
    },
    {
      name: "Thực phẩm cần loại trừ",
      path: "/user/foodExclusions",
    },
    {
      name: "Thực phẩm yêu thích",
      path: "/user/likedFoods",
    },
    {
      name: "Thực phẩm không thích",
      path: "/user/BlockedFoods",
    },
    {
      name: "Thực đơn đã lưu",
      path: "/user/savedMeals",
    },
    {
      name: "Chỉ số thể chất",
      path: "/user/PhysicalStats",
    },
  ];

  return (
    <div className="border border-primaryColor px-10 py-5 rounded-2xl w-[300px]">
      {sidebar.map(({ name, path }) => (
        <li key={name} className="py-3 list-none">
          <NavLink
            to={path}
            className={({ isActive }) => {
              return !isActive
                ? "border-none py-2 px-2 text-textColor hover:text-primaryColor"
                : "border-none py-2 px-2 text-primaryColor font-semibold";
            }}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default SidebarSetting;
