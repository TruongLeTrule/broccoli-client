import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { cleanCreateMealBody } from "../utils/cleanRequestBody";

const baseUrl = "http://localhost:3000/api/v1/meals";

const MealList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setMeals(response.data.meals);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-10 px-32 mx-auto max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
      {meals.map((meal, i) => (
        <Link
          to={`/mealDetail/${meal.mealId}`}
          key={i}
          className="px-5 py-5 border-2 border-primaryColor text-center rounded-lg focus:cursor-pointer"
        >
          <div className="px-5 py-5">
            <img src={meal.imgURL} alt={meal.mealName} />
          </div>
          <div className="px-2 py-2">{meal.mealName}</div>
          <div>{meal.mealType}</div>
        </Link>
      ))}
    </div>
  );
};

export default MealList;
