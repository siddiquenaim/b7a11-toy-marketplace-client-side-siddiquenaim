import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SingleToy from "../pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EditDetails from "../pages/EditDetails/EditDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-a-toy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-details/:id",
        element: (
          <PrivateRoute>
            <EditDetails></EditDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-nine-sigma.vercel.app/toy/${params.id}`
          ),
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch(
            "https://toy-marketplace-server-nine-sigma.vercel.app/toys?limit=20"
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/toy-details/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-nine-sigma.vercel.app/toy/${params.id}`
          ),
      },
    ],
  },
]);
