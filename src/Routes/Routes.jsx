import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AppsData from "../pages/AppsData/AppsData";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement:'loading..',
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("./apps.json"),
      },
      {
        path:"AppsData",
        Component:AppsData,
        loader: async () => {
      const res = await fetch("/apps.json");
      return res.json();
    }
      }
    ],
  },
]);
