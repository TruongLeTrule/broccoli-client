import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const baseUrl = "http://localhost:3000/api/v1/meals";

const FoodRecipe = () => {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("mealId");

    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/:${id}`);
        setMeal(response.data.meal);
        console.log(response.data.meal);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [location.search]);

  return (
    <div className="mx-32">
      <div className="flex flex-row items-center gap-20">
        <div className="w-1/2">
          <img src={meal.imgURL} alt={meal.mealName} />
        </div>
        <div className="px-5 py-5 flex flex-col gap-5 bg-secondaryColor rounded-3xl border border-primaryColor">
          <div className="px-5 py-5 bg-bgColor rounded-2xl border border-primaryColor">
            <p className="font-dancing text-2xl text-btnColor pb-2">
              Nguyên liệu:
            </p>
            <p className="pb-5">{meal.ingredients}</p>
            <p className="font-dancing text-2xl text-btnColor pb-2">Gia vị:</p>
            <p>{meal.nutrients}</p>
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
