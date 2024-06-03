import React from "react";
import SidebarSetting from "../components/sidebarSetting";

const LikedFoods = () => {
  return (
    <div className="mt-40 flex flex-row px-32 gap-20">
      <div className="">
        <SidebarSetting />
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-justify leading-loose">
          Các món ăn và thực phẩm bạn yêu thích sẽ được thêm vào danh sách này.
        </p>
        <div className="px-2 py-2 flex flex-row border border-primaryColor rounded-lg">
          <input
            type="search"
            name=""
            id=""
            placeholder="Nhập tên thực phẩm bạn yêu thích"
            className="w-full focus:outline-none"
          />
          <button className="border border-primaryColor px-2 py-2 rounded-md">
            Thêm
          </button>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default LikedFoods;
