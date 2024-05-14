import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorElement from "../Pages/ErrorElement";
import Home from "../Pages/Home/Home";
import LogIN from "../Pages/LogIN";
import Register from "../Pages/Register";
import MyQueries from "../Pages/My Queries/MyQueries";
import AddQquery from "../Pages/AddQuery/AddQquery";
import Queries from "../Pages/Qreuries/Queries";
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
        },
        {
          path:'/my_queries',
          element:<MyQueries></MyQueries>
        },
        {
          path:'/add_query',
          element:<AddQquery></AddQquery>
        },
        {
          path:'/queries',
          element:<Queries/>,
          loader: () => fetch('http://localhost:5000/products')
        }
      ]
    },
  ]);
export default router;