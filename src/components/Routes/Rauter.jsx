import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import CategoryNews from "../../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../layouts/Login";
import Register from "../layouts/Register";



    const Rauter= createBrowserRouter([
        {
            path:'/',
            element: <HomeLayouts></HomeLayouts>,
            children:[
                {
                    path:'',
                    element: <Navigate to={"/category/01"}></Navigate>

                },
                {
                    path:'/category/:id',
                    element:<CategoryNews></CategoryNews>,
                    loader:({params}) =>
                        fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),

            },
        ],
        },
        {
            path:'/news',
            element: <h1>News </h1>,
        },
        {
            path:'/auth',
            element: <AuthLayout></AuthLayout>,

            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>,
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>,
                }
            ]
        },
        {
            path:'*',
            element: <h1>Error massage</h1>,
        }
    ])
   


export default Rauter;