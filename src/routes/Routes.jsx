import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";

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
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/add-a-toy",
        element: <AddAToy></AddAToy>,
      },
    ],
  },
]);
