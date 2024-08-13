import React from 'react';
import Home from '../pages/Home';
import ItemCard from './ItemCard';
import Hero from './Hero';
import Login from './Login';
import Signup from './Signup';
import AddItem from './AddItem';

const routes = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/",
        element: <Hero />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/items/:id",
        element: <ItemCard />
    },
    {
        path: "/add",
        element: <AddItem />
    },
]

export default routes;