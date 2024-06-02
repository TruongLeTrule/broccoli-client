import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
} from './pages';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { AdminLayout, HomeLayout } from './layouts';
import { adminLoader } from './layouts/AdminLayout';
import { homeLayoutLoader } from './layouts/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    loader: homeLayoutLoader,
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
    path: 'admin',
    element: <AdminLayout />,
    loader: adminLoader,
    children: [
      {
        index: true,
        element: <Admin />,
      },
      {
        path: 'meal',
        children: [
          {
            path: 'create',
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
            path: 'create',
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
