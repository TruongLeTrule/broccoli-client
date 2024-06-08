import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import SessionsPlan from '../components/sessionsPlan';
import CaloriesChart from '../components/planner/CaloriesChart';
import CaloriesDetails from '../components/caloriesDetails';
import { BsThreeDots } from 'react-icons/bs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import theme from '../components/theme';
import useMealPlanStore from '../states/mealPlanState';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import {
  createMealPlanAPI,
  getMealPlanAPI,
  updateMealPlanAPI,
} from '../apis/mealPlan';
import { getUserTarget } from '../apis/user';

const OneDayPlan = () => {
  const {
    chosenMeals,
    nutrients,
    setChosenMeals,
    setNutrients,
    target,
    setTarget,
    appliedDate,
    setAppliedDate,
  } = useMealPlanStore((state) => state);
  const [loading, setLoading] = useState(false);

  const handleCreateMealPlanBtn = async () => {
    setLoading(true);
    const { nutrients, chosenMeals } = await createMealPlanAPI(
      appliedDate.startOf('date').toISOString()
    );
    console.log(chosenMeals, nutrients);

    setTarget(await getUserTarget());
    setNutrients(nutrients);
    setChosenMeals(chosenMeals);
    setLoading(false);
  };

  const handleCalendarPick = async (newDate) => {
    setLoading(true);
    setAppliedDate(newDate);
    const { nutrients, chosenMeals } = await getMealPlanAPI(
      newDate.startOf('date').toISOString()
    );

    console.log(chosenMeals, nutrients);
    setTarget(await getUserTarget());
    setNutrients(nutrients);
    setChosenMeals(chosenMeals);
    setLoading(false);
  };

  const handleRegenerateBtnClick = async () => {
    setLoading(true);
    const { nutrients, chosenMeals } = await updateMealPlanAPI(
      appliedDate.startOf('date').toISOString()
    );
    console.log(chosenMeals, nutrients);

    setTarget(await getUserTarget());
    setNutrients(nutrients);
    setChosenMeals(chosenMeals);
    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="mt-40 px-40">
        {/* Page header */}
        <div className="flex flex-row gap-x-24 items-center">
          <div className="flex flex-row items-center gap-2">
            {/* <BsThreeDots className="text-primaryColor" /> */}
            <p className="text-primaryColor font-semibold text-2xl">Thực đơn</p>
            <div className="flex flex-row items-center gap-2 ml-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={appliedDate} onChange={handleCalendarPick} />
              </LocalizationProvider>
              {/* <p className="text-primaryColor text-lg">Hôm nay</p> */}
            </div>
          </div>
          {chosenMeals && (
            <button
              disabled={loading}
              type="button"
              className="group hover:bg-primaryColor cursor-pointer flex items-center justify-center w-10 h-10 border border-primaryColor rounded-full px-2 py-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                  ></svg>
                  Processing...
                </>
              ) : (
                <LiaExchangeAltSolid
                  onClick={handleRegenerateBtnClick}
                  className="group-hover:text-white text-primaryColor"
                />
              )}
            </button>
          )}
        </div>
        {/* Meal plan section */}
        {chosenMeals ? (
          <div className="grid grid-cols-2 gap-40">
            {/* Meal column */}
            <SessionsPlan />
            {/* Nutrient column */}
            <div className="mt-10">
              <p className="text-xl text-primaryColor text-center">
                Thành phần dinh dưỡng
              </p>
              <div className="flex justify-center">
                <CaloriesChart nutrients={nutrients} />
              </div>
              <div className="mx-auto w-full grid grid-cols-1">
                <div className="text-center">
                  <p className="text-primaryColor font-medium">
                    Tổng Calories:{' '}
                    {nutrients
                      .find(({ nutrientId }) => nutrientId === 1)
                      .nutrientValue.toFixed(2)}{' '}
                    kCal
                  </p>
                  <p className="text-primaryColor font-medium mt-4">
                    Calories mục tiêu:{' '}
                    {target[0]?.targetNutrientValue.toFixed(2)} kCal
                  </p>
                  {/* <CaloriesDetails /> */}
                  {/* <button className="mt-10 text-primaryColor hover:text-btnColor">
                    Xem thêm
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-24 mt-32">
            <button
              onClick={handleCreateMealPlanBtn}
              type="button"
              className="px-8 py-4 rounded-md border border-primaryColor text-primaryColor hover:text-white hover:bg-primaryColor"
            >
              Tạo thực đơn
            </button>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default OneDayPlan;
