import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "../components/loading/Loading";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp";
import AuthContext from "../contexts/AuthContext";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Booking from "./../components/Booking/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthContext>
        <Layout />
      </AuthContext>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signIn",
        element: <SignUp />,
      },
    ],
  },
]);
