import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AppsData from "../pages/AppsData/AppsData";
import Loding from "../pages/Loding/Loding";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement:<Loding></Loding>,
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
      },
    ],
  },
]);
