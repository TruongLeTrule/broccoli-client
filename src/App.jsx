import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Error,
  Landing,
  Login,
  Register,
  Meal,
  Planner,
  Admin,
  CreateMeal,
  CreateIngredient,
  UpdateMeal,
  UpdateIngredient,
  MealDetail,
  OneDayPlan,
  NutritionTargets,
  FoodExclusions,
  PrimaryDiet,
  LikedFoods,
  BlockedFoods,
  SavedMeals,
  PhysicalStats,
  User,
} from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { AdminLayout, HomeLayout, UserLayout } from "./layouts";
import { adminLoader } from "./layouts/AdminLayout";
import { userLoader } from "./layouts/UserLayout";
import { homeLayoutLoader } from "./layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    loader: homeLayoutLoader,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "meal",
        element: <Meal />,
      },
      {
        path: "meal/:id",
        element: <MealDetail />,
      },
      {
        path: "planner",
        element: <Planner />,
      },
      {
        path: 'planner/onedayplan',
        element: <OneDayPlan />,
      },
      {
        path: "user",
        element: <UserLayout />,
        loader: userLoader,
        children: [
          {
            index: true,
            element: <User />,
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
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    loader: adminLoader,
    children: [
      {
        index: true,
        element: <Admin />,
      },
      {
        path: "create-meal",
        element: <CreateMeal />,
      },
      {
        path: "update-meal",
        element: <UpdateMeal />,
      },
      {
        path: "create-ingredient",
        element: <CreateIngredient />,
      },
      {
        path: "update-ingredient",
        element: <UpdateIngredient />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
