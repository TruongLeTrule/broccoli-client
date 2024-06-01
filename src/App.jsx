import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";

import {
  Error,
  Landing,
  Login,
  Register,
  Meal,
  Planner,
  CreateMeal,
  CreateIngredient,
  UpdateMeal,
  UpdateIngredient,
} from "./pages";
import MealDetail from "./pages/mealdetail";
import OneDayPlan from "./pages/oneDayPlan";
import NutritionTargets from "./pages/nutritionTargets";
import FoodExclusions from "./pages/foodExclusions";
import PrimaryDiet from "./pages/primaryDiet";
import PhysicalStats from "./pages/physicalStats";
import LikedFoods from "./pages/likedFoods";
import BlockedFoods from "./pages/blockedFoods";
import SavedMeals from "./pages/savedMeals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "meal",
        element: <Meal />,
      },
      {
        path: "planner",
        element: <Planner />,
      },
      {
        path: "mealDetail",
        element: <MealDetail />,
      },
      {
        path: "onedayplan",
        element: <OneDayPlan />,
      },
      {
        path: "nutritionTargets",
        element: <NutritionTargets />,
      },
      {
        path: "foodExclusions",
        element: <FoodExclusions />,
      },
      {
        path: "primaryDiet",
        element: <PrimaryDiet />,
      },
      {
        path: "likedFoods",
        element: <LikedFoods />,
      },
      {
        path: "blockedFoods",
        element: <BlockedFoods />,
      },
      {
        path: "savedMeals",
        element: <SavedMeals />,
      },
      {
        path: "physicalStats",
        element: <PhysicalStats />,
      },
    ],
  },
  {
    path: "populate",
    children: [
      {
        path: "meal",
        children: [
          {
            index: true,
            element: <CreateMeal />,
          },
          {
            path: "update",
            element: <UpdateMeal />,
          },
        ],
      },
      {
        path: "ingredient",
        children: [
          {
            index: true,
            element: <CreateIngredient />,
          },
          {
            path: "update",
            element: <UpdateIngredient />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
