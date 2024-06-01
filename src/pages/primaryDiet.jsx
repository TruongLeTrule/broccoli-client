import React from "react";
import SidebarSetting from "../components/sidebarSetting";

const PrimaryDiet = () => {
  return (
    <div className="mt-40 flex flex-row px-32 gap-20">
      <div>
        <SidebarSetting />
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-justify leading-loose">
          Chúng tôi sẽ căn cứ vào bữa ăn của bạn theo loại chế độ ăn kiêng chính
          này. Chọn &quot;Ăn gì cũng được&quot; để tùy chỉnh chế độ ăn uống độc
          đáo của riêng bạn từ đầu.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <label
              htmlFor="EatAll"
              className="text-xl font-medium text-primaryColor"
            >
              Ăn gì cũng được
            </label>
            <input type="radio" name="eat" id="EatAll" />
          </div>
          <p className="ml-10">Không kiêng bất cứ thực phẩm nào</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <label
              htmlFor="EatAll"
              className="text-xl font-medium text-primaryColor"
            >
              Ăn chay
            </label>
            <input type="radio" name="eat" id="EatAll" />
          </div>
          <p className="ml-10">Kiêng thực phẩm có nguồn gốc từ động vật</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <label
              htmlFor="EatAll"
              className="text-xl font-medium text-primaryColor"
            >
              Ăn keto
            </label>
            <input type="radio" name="eat" id="EatAll" />
          </div>
          <p className="ml-10">Ít carbohydrate (carb) và nhiều chất béo tốt</p>
        </div>
      </div>
    </div>
  );
};

export default PrimaryDiet;
