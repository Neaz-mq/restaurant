import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menus from "../pages/Menu/Menus/Menus";
import Abouts from "../pages/About/Abouts/Abouts";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menus></Menus>,
      },
      {
        path: "/about",
        element: <Abouts></Abouts>
      },
    ],
  },
]);
