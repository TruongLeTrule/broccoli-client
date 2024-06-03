import { Outlet } from 'react-router-dom';
import MealList from '../components/mealList';
import { IoIosSearch } from 'react-icons/io';

const Meal = () => {
  return (
    <div className="mt-40 flex flex-col gap-10">
      <div className="flex flex-row px-36 justify-between">
        <div>
          <p className="text-primaryColor font-semibold">Danh mục món ăn</p>
        </div>

        <div className="flex flex-row border border-primaryColor rounded-full px-3 py-2 items-center">
          <input
            type="search"
            name=""
            id=""
            className="focus:outline-none text-sm"
          />
          <IoIosSearch className="text-primaryColor" />
        </div>
      </div>
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
