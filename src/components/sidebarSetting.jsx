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
      path: "",
    },
    {
      name: "Thực phẩm cần loại trừ",
      path: "",
    },
    {
      name: "Thực phẩm yêu thích",
      path: "",
    },
    {
      name: "Thực phẩm không thích",
      path: "",
    },
    {
      name: "Thực đơn đã lưu",
      path: "",
    },
    {
      name: "Chỉ số thể chất",
      path: "",
    },
  ];

  return (
    <div className="border border-primaryColor px-10 py-5 rounded-2xl">
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
