import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Error from "../Components/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../pages/Dashboard/StudentsDashboard/myCart";
import Allusers from "../pages/Dashboard/AdminDashboard/Allusers";
import AdminRoute from "./AdminRoute";
import AddClass from "../pages/Dashboard/InstructorsDashboard/AddClass";
import Payment from "../pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/allclasses',
          element:<AllClasses></AllClasses>
        },
        {
          path:"/allinstructors",
          element:<AllInstructors></AllInstructors>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'mycart',
          element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path:'manageuser',
          element:<AdminRoute><Allusers></Allusers></AdminRoute>
        },
        {
        path:'addclass',
        element:<PrivateRoute><AddClass></AddClass></PrivateRoute>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        }
      ]
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ]);