import React from 'react';
import Home from '../pages/Home';
import ItemCard from './ItemCard';
import Hero, { logout } from './Hero';
import Login from './Login';
import Signup from './Signup';
import Seller from '../pages/Seller';
const routes = [
    // {
    //     path: "/",
    //     element: <App />
    // },
    {
        path: "/",
        element: <Hero />,
        children: [
            {
                path: "/login",
                element: <Login />
            },{
                path: "/signup",
                element: <Signup />
            }
        ]
    },
    {
        path: "/items/:id",
        element: <ItemCard />
    },
    {
        path: "/seller",
        element: <Seller />
    }
]

export default routes;