import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorElement from "../Pages/ErrorElement";
import Home from "../Pages/Home/Home";
import LogIN from "../Pages/LogIN";
import Register from "../Pages/Register";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<LogIN></LogIN>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);
export default router;