import React from "react";
import QuickMealList from "../components/quickMealList";
import QuickMeal from "../components/quickMeal";
import CaloriesChart from "../components/caloriesChart";

const Planner = () => {
  return (
    <div className="mt-32">
      <div className="grid grid-cols-2 gap-60 w-full border-y border-primaryColor rounded-lg px-52 pb-24 justify-between bg-fourthColor">
        <QuickMeal />
        <CaloriesChart />
      </div>
      <QuickMealList />
      <div className="grid grid-cols-3 justify-center gap-20 mt-10 mx-60">
        <button className="px-5 py-5 border-2 rounded-xl border-primaryColor hover:bg-primaryColor hover:text-bgColor">
          Lấy thực đơn trong mục đã lưu
        </button>
        <button className="px-5 py-5 border-2 rounded-xl border-primaryColor hover:bg-primaryColor hover:text-bgColor">
          Tạo thực đơn nhanh
        </button>
        <button className="px-5 py-5 border-2 rounded-xl border-primaryColor hover:bg-primaryColor hover:text-bgColor">
          Tạo thực đơn
        </button>
      </div>
    </div>
  );
};

export default Planner;
