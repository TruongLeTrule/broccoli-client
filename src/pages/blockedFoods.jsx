import React from "react";
import SidebarSetting from "../components/sidebarSetting";

const BlockedFoods = () => {
  return (
    <div className="mt-40 flex flex-row px-32 gap-20">
      <div className="">
        <SidebarSetting />
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-justify leading-loose">
          Thực phẩm bạn đã chặn sẽ không được trình tạo đề xuất. Nếu bạn chặn
          một loại thực phẩm cơ bản, nó cũng sẽ chặn các công thức nấu ăn sử
          dụng thực phẩm đó làm nguyên liệu.
        </p>
        <div className="px-2 py-2 flex flex-row border border-primaryColor rounded-lg">
          <input
            type="search"
            name=""
            id=""
            placeholder="Nhập tên thực phẩm bạn không thích"
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

export default BlockedFoods;
