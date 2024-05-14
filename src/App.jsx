import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomeLayout,
  Error,
  Landing,
  Login,
  Register,
  Meal,
  Planner,
} from './pages';

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
      },
      {
        path: 'register',
        element: <Register />,
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
