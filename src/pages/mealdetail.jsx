import React, { useEffect, useState } from 'react';
import FoodRecipe from '../components/foodRecipe';
import CaloriesChart from '../components/caloriesChart';
import CaloriesDetails from '../components/caloriesDetails';
import { useParams } from 'react-router-dom';
import { getMealSpecific } from '../apis/meal';

const MealDetail = () => {
  const { id } = useParams();
  const [mealNutrients, setMealNutrients] = useState([]);
  const [mealId, setMealId] = useState();

  const getMeal = async () => {
    const { meal } = await getMealSpecific(id);
    setMealId(id);
    setMealNutrients(meal?.nutrients);
  };

  useEffect(() => {
    getMeal();
  }, []);
  return (
    <div className="mt-40">
      {mealId && <FoodRecipe mealId={mealId} />}
      <div className="px-40 mt-20">
        <p className="font-dancing font-semibold text-2xl text-primaryColor">
          Thành phần dinh dưỡng:
        </p>
      </div>
      <div className="mx-auto w-full grid grid-cols-2 gap-40 px-40">
        <CaloriesChart data={mealNutrients} />
        <div className="text-center">
          <div className="grid grid-cols-3 gap-8 mt-10">
            <div></div>
            <div className="text-primaryColor font-medium">TỔNG</div>
            <div className="text-primaryColor font-medium">MỤC TIÊU</div>
          </div>
          <CaloriesDetails nutrients={mealNutrients} />
          <button className="mt-10 text-primaryColor hover:text-btnColor">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
