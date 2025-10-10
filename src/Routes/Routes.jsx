import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AppsData from "../pages/AppsData/AppsData";
import Loding from "../pages/Loding/Loding";
import SingleApp from "../components/SingleApp/SingleApp";
import Installation from "../pages/Installation/Installation";


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
        path:"/AppsData",
        Component:AppsData,
        loader:()=> fetch("/apps.json"),
      },
      {
        path:"/SingleApp/:id",
        Component:SingleApp,
        loader:async ({ params }) => {
      const res = await fetch("/apps.json");
      const data = await res.json();
      return data.find(app => app.id === parseInt(params.id));
    },
      },
      {
        path:"/Installation",
        Component:Installation,
        loader:()=> fetch("/apps.json"),
      }
    ],
  },
]);
