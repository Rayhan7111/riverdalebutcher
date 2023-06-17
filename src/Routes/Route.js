import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Home";
import Offers from "../Components/Offers";
import Products from "../Components/Products";
import Services from "../Components/Services";
import Delivery from "../Components/Delivery";
import About from "../Components/About";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";


export const router = createBrowserRouter([
    {
        
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/offers',
                element: <Offers></Offers>
            },
            {
                path: '/products',
                element:<Products></Products>
            },
            {
                path: '/services',
                element:<Services></Services>
            },
            {
                path: '/delivery',
                element:<Delivery></Delivery>
            },
            {
                path: '/about us',
                element:<About></About>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/login',
                element:<Login></Login>,
                loader: () => fetch('http://localhost:5000/users')
            }
        ]
    }
]);