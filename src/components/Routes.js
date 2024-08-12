import React from 'react';
import Home from '../pages/Home';
import ItemCard from './ItemCard';

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/items/:id",
        element: <ItemCard />
    }
]

export default routes;