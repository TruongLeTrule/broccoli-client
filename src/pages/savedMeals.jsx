import React from "react";
import SidebarSetting from "../components/sidebarSetting";

const SavedMeals = () => {
  return (
    <div className="mt-40 flex flex-row px-32 gap-20">
      <div className="">
        <SidebarSetting />
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-justify leading-loose">
          Danh sách các thực đơn mà bạn đã lưu để sử dụng cho các lần tiếp theo.
        </p>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default SavedMeals;
