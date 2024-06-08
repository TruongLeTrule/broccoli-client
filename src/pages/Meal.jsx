import { Outlet } from "react-router-dom";
import MealList from "../components/mealList";

const Meal = () => {
  return (
    <div className="mt-40 flex flex-col gap-10">
      <div className="flex flex-row px-36 justify-between"></div>
      <div>
        <MealList />
      </div>
      <button className="text-primaryColor hover:text-btnColor">
        Xem thêm
      </button>

      <Outlet />
    </div>
  );
};
export default Meal;
