import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
