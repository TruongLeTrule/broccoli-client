import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const baseUrl = "http://localhost:3000/api/v1/meals";
const data = [
  {
    name: "Carbs",
    value: 100,
    target: 100,
  },
  {
    name: "Protein",
    value: 200,
    target: 200,
  },
  {
    name: "Fats",
    value: 150,
    target: 150,
  },
];

const dataUsers = [
  {
    name: "Carbs",
    value: 100,
  },
  {
    name: "Protein",
    value: 200,
  },
  {
    name: "Fats",
    value: 150,
  },
];

const calories = {
  title: "Calories",
  value: 1880,
  target: 1900,
};

const CaloriesDetails = () => {
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
    <div className="">
      <div className="content-center">
        <div>
          <div className="grid grid-cols-3 gap-10 text-center">
            <div className="py-2">{calories.title}</div>
            <div className="py-2">{calories.value}Cal</div>
            <div className="py-2">~{calories.target}Cal</div>
          </div>
          {data.map((data, i) => (
            <div key={i} className="grid grid-cols-3 gap-10 text-center">
              <div className="py-2">{data.name}</div>
              <div className="py-2">{data.value}g</div>
              <div className="py-2">~{data.target}g</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaloriesDetails;
