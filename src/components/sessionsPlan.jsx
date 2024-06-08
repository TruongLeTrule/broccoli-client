import React, { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { LiaExchangeAltSolid } from 'react-icons/lia';
import { FaCheckCircle } from 'react-icons/fa';
import useMealPlanStore from '../states/mealPlanState';
import { mealImgs, mealTimes } from '../utils/renderArr';
import { updateOneMealAPI } from '../apis/mealPlan';

const SessionsPlan = () => {
  const { chosenMeals, setChosenMeals, setNutrients, appliedDate } =
    useMealPlanStore((state) => state);
  const [meals, setMeals] = useState([]);
  const [keepMeals, setKeepMeals] = useState([]);

  useEffect(() => {
    if (chosenMeals) setMeals(chosenMeals);
  }, [chosenMeals]);

  const handleRegenerateBtnClick = async (mealTime) => {
    const regenerateMeals = chosenMeals
      .filter((chosenMeal) => chosenMeal.mealTime === mealTime)
      .filter(({ mealId }) => !keepMeals.includes(mealId));

    if (!regenerateMeals?.length) return;

    console.log(regenerateMeals[0].mealId);

    const newMealPlan = await updateOneMealAPI(
      regenerateMeals[0].mealId,
      mealTime,
      appliedDate.startOf('date').toISOString()
    );

    console.log(newMealPlan);

    setChosenMeals(newMealPlan?.chosenMeals);
    setNutrients(newMealPlan?.nutrients);
  };

  const handleExceptBtnClick = (mealId) => {
    const isMealExistInKeepMeals = keepMeals.find((id) => mealId === id);

    if (isMealExistInKeepMeals)
      setKeepMeals(keepMeals.filter((meal) => meal !== mealId));
    if (!isMealExistInKeepMeals) setKeepMeals([...keepMeals, mealId]);
  };

  if (meals?.length)
    return (
      <div>
        {mealTimes.map(({ key, renderName }) => (
          <div
            key={key}
            className="px-6 py-5 border-2 border-primaryColor rounded-xl mt-10"
          >
            {/* Meal time title */}
            <div className="flex flex-row items-center justify-between">
              <div className="text-primaryColor font-md text-lg">
                {renderName}
              </div>
              <div className="group hover:bg-primaryColor cursor-pointer border border-primaryColor rounded-full px-2 py-2">
                <LiaExchangeAltSolid
                  onClick={() => handleRegenerateBtnClick(key)}
                  className="group-hover:text-white text-primaryColor"
                />
              </div>
            </div>
            {/* Meals list in each meal time*/}
            {meals.map(
              ({ mealId, mealName, mealTime, imgUrl, quantity }, index) =>
                key === mealTime && (
                  <div
                    key={mealId}
                    className="mt-4 flex flex-row items-center justify-between"
                  >
                    <div className="flex flex-row items-center gap-x-6">
                      <div className="flex flex-row ">
                        <label
                          htmlFor={mealTime}
                          className="cursor-pointer relative"
                        >
                          <input
                            type="checkbox"
                            id={mealTime}
                            className="appearance-none w-6 h-6 border border-primaryColor rounded-full checkedi"
                          />
                          <FaCheckCircle
                            onClick={() => handleExceptBtnClick(mealId)}
                            className="text-primaryColor text-xs w-6 h-6 absolute left-0 top-0 text-opacity-0 check1 transition"
                          />
                        </label>
                      </div>
                      <img
                        className="w-1/6 rounded-md"
                        src={mealImgs[index]}
                        alt={mealName}
                      />
                      <div className="w-1/2">
                        <div className="font-md text-base">{mealName}</div>
                        <div className="flex items-center gap-x-2 mt-2">
                          <input
                            className="text-center p-2 w-8 h-8 rounded-md border-2 border-thirdColor"
                            defaultValue={quantity}
                          />
                          phần ăn
                        </div>
                      </div>
                    </div>
                    <div>
                      <BsThreeDots className="cursor-pointer text-primaryColor " />
                    </div>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    );
};

export default SessionsPlan;
