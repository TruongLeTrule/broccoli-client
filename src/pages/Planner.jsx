import React from "react";
import QuickMealList from "../components/quickMealList";
import QuickMeal from "../components/quickMeal";
import CaloriesChart from "../components/caloriesChart";
import CaloriesDetails from "../components/caloriesDetails";

const Planner = () => {
  return (
    <div className="mt-52 mx-auto max-lg:mt-40">
      {/* <div className="grid grid-cols-2 gap-10 w-full border-y border-primaryColor rounded-lg px-32 pb-24 justify-between bg-fourthColor max-lg:hidden max-xl:px-20 max-xl:gap-20">
        <QuickMeal />
        <div className="w-full grid grid-cols-2 gap-10 content-center">
          <CaloriesChart />
          <div className="mt-10">
            <CaloriesDetails />
          </div>
        </div>
      </div>
      <div className="max-lg:hidden">
        <QuickMealList />
      </div> */}
      <div className="grid md:grid-cols-3 justify-center gap-20 mt-10 mx-60 max-md:mx-0 max-md:mt-28 max-md:gap-10 text-center max-lg:mx-20">
        <div className="px-5 py-5 border-2 rounded-xl border-primaryColor hover:bg-primaryColor hover:text-bgColor">
          <a href="/oneDayPlan">Lấy thực đơn trong mục đã lưu</a>
        </div>
        <div className="px-5 py-5 border-2 rounded-xl border-primaryColor hover:bg-primaryColor hover:text-bgColor">
          <a href="/oneDayPlan">Tạo thực đơn nhanh</a>
        </div>
        <div className="px-5 py-5 border-2 rounded-xl border-primaryColor hover:bg-primaryColor hover:text-bgColor">
          <a href="/oneDayPlan">Tạo thực đơn</a>
        </div>
      </div>
    </div>
  );
};

export default Planner;
