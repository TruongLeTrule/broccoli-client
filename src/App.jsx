import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
} from './pages';
import HomeLayout from './layouts/HomeLayout';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'meal',
        element: <Meal />,
      },
      {
        path: 'planner',
        element: <Planner />,
      },
    ],
  },
  {
    path: 'populate',
    children: [
      {
        path: 'meal',
        children: [
          {
            index: true,
            element: <CreateMeal />,
          },
          {
            path: 'update',
            element: <UpdateMeal />,
          },
        ],
      },
      {
        path: 'ingredient',
        children: [
          {
            index: true,
            element: <CreateIngredient />,
          },
          {
            path: 'update',
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
