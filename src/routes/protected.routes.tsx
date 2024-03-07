import { RouteObject } from "react-router-dom";
import { MainLayout } from "../components/layout/pageLayout/main.layout";
import { LandingPage } from "../pages/landing.page";
import { BlogLayout } from "../components/layout/pageLayout/blog.layout";
import { BlogPage } from "../pages/blog.page";

export const protectedRoutes:RouteObject[]= [
    {
        path:"",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<LandingPage/>,
            },
        ]
    },
    {
        path:"blog/*",
        element:<BlogLayout/>,
        children: [
            {
                index:true,
                element:<BlogPage/>
            }
        ]
    }
]