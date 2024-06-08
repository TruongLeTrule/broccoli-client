import React from 'react';
import { Link } from 'react-router-dom';
import QuickMealList from '../components/quickMealList';
import QuickMeal from '../components/quickMeal';
import CaloriesChart from '../components/caloriesChart';
import CaloriesDetails from '../components/caloriesDetails';
import { getMealPlanAPI } from '../apis/mealPlan';
import { getUserTarget } from '../apis/user';
import useMealPlanStore from '../states/mealPlanState';

const Planner = () => {
  const { setChosenMeals, setNutrients, setTarget } = useMealPlanStore(
    (state) => state
  );

  const getMealPlan = async () => {
    const { chosenMeals, nutrients } = await getMealPlanAPI();

    setTarget((await getUserTarget()).nutrients);
    setChosenMeals(chosenMeals);
    setNutrients(nutrients);
  };

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
        <Link
          to="/planner/onedayplan"
          className="px-5 py-5 border-2 rounded-xl border-primaryColor hover:bg-primaryColor hover:text-bgColor"
        >
          Lấy thực đơn trong mục đã lưu
        </Link>
        <Link
          to="/planner/onedayplan"
          onClick={getMealPlan}
          className="px-5 py-5 border-2 rounded-xl border-primaryColor hover:bg-primaryColor hover:text-bgColor"
        >
          Tạo thực đơn nhanh
        </Link>
        <Link
          to="/planner/onedayplan"
          className="px-5 py-5 border-2 rounded-xl border-primaryColor hover:bg-primaryColor hover:text-bgColor"
        >
          Tạo thực đơn
        </Link>
      </div>
    </div>
  );
};

export default Planner;
