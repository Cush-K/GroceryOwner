import React from 'react';
import Home from '../pages/Home';
import ItemCard from './ItemCard';
import Hero from './Hero';
import Login from './Login';
import Signup from './Signup';
import Seller from '../pages/Seller';
import App from './App';
const routes = [
    // {
    //     path: "/",
    //     element: <App />
    // },
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/hero",
                element: <Hero />
            },
            {
                path: "/home",
                element: <Home />
            },
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