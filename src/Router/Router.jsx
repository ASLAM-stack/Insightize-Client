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
import QueryDetails from "../Pages/Qreuries/Component/QueryDetails";
import RecommendationMe from "../Pages/Recommendation me/RecommendationMe";
import MyRecomend from "../Pages/My Recommend/MyRecomend";
import UpdateQuery from "../Pages/UpdateQuaery/UpdateQuery";
import PrivateRouter from "./PrivateRouter";
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
          element:<PrivateRouter>
            <MyQueries></MyQueries>
          </PrivateRouter>
        },
        {
          path:'/add_query',
          element:<PrivateRouter>
            <AddQquery></AddQquery>
          </PrivateRouter>
        },
        {
          path:'/queries',
          element:<Queries/>,
          loader: () => fetch('http://localhost:5000/products')
        },
        {
          path:'/queryDetails/:id',
          element:<PrivateRouter>
            <QueryDetails></QueryDetails>
          </PrivateRouter>,
          loader: ({params}) => fetch(`http://localhost:5000/query/${params.id}`)
          
        },
        {
          path:'/recommendations',
          element:<PrivateRouter>
            <RecommendationMe></RecommendationMe>
          </PrivateRouter>
        },
        {
          path:'/my_recommendatons',
          element:<PrivateRouter>
            <MyRecomend></MyRecomend>
          </PrivateRouter>,
          
        },
        {
          path:'/update/:id',
          element:<UpdateQuery></UpdateQuery>,
          loader: ({params}) => fetch(`http://localhost:5000/query/${params.id}`)
        }
      ]
    },
  ]);
export default router;