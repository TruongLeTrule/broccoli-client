/* eslint-disable no-unused-vars */
import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";

import { Error, Landing, Login, Register, Meal, Planner } from "./pages";
import MealDetail from "./pages/mealdetail";
import OneDayPlan from "./pages/oneDayPlan";
import NutritionTargets from "./pages/nutritionTargets";

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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
