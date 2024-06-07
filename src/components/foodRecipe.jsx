import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const baseUrl = "http://localhost:3000/api/v1/meals";

const FoodRecipe = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const id = pathSegments[pathSegments.length - 1];

    console.log("mealId from URL:", id);

    if (!id || id === "meals") {
      setError(new Error("No mealId provided in the URL"));
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${id}`);
        setMeal(response.data.meal);
        console.log(response.data.meal);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.pathname]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!meal) {
    return <div>No meal data available</div>;
  }

  return (
    <div className="mx-32">
      <div className="flex flex-row items-center gap-20">
        <div className="w-1/2">
          {meal.imgURL ? (
            <img src={meal.imgURL} alt={meal.mealName} />
          ) : (
            <div>No image available</div>
          )}
        </div>
        <div className="px-5 py-5 flex flex-col gap-5 bg-secondaryColor rounded-3xl border border-primaryColor">
          <div className="px-5 py-5 bg-bgColor rounded-2xl border border-primaryColor w-[500px]">
            <p className="font-dancing text-2xl text-btnColor pb-2">
              Tên món ăn:
            </p>
            <p>{meal.mealName}</p>
            <p className="font-dancing text-2xl text-btnColor pt-5 pb-2">
              Nguyên liệu và gia vị:
            </p>
            <ul className="pb-5">
              {meal.ingredients.map((ingredient, index) => (
                <li key={index} className="leading-loose">
                  {ingredient.ingredientName}: {ingredient.ingredientValue}
                  {ingredient.ingredientUnit}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 py-5 bg-bgColor rounded-2xl border border-primaryColor">
            <p className="font-dancing text-2xl text-btnColor pb-2">
              Chế biến:
            </p>
            <p>{meal.mealType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRecipe;
