import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("/menuItems.json"),
      },
      {
        path: "/about-us",
        element: <AboutUs/>
      }
    ],
  },
]);
