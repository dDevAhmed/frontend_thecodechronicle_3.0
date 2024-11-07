// routes/AppRoutes.jsx  
import { createBrowserRouter, Outlet } from "react-router-dom"
import Layout from "../layout/Layout"

// admin
import PrivateRoutes from '../components/PrivateRoutes'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'

// guest
import Home from '../pages/Home'

import Products from '../pages/Products'
import Favorites from '../pages/Favorites'
import Inbox from "../pages/Inbox"
import OrderLists from "../pages/OrderLists"
import ProductStock from "../pages/ProductStock"
import Pricing from "../pages/Pricing"
import Todo from "../pages/Todo"
import Contact from "../pages/Contact"
import Invoice from "../pages/Invoice"
import Team from "../pages/Team"
import Table from "../pages/Table"
import NotFound from "../pages/NotFound"
import Calendar from "../pages/Calendar"
// import Student from '../features/students/Student';  
// import Teacher from '../features/staffs/Teacher';  

const router = createBrowserRouter([
    // /admin/...           /dashboard, /bloggers, /settings
    // /, /post/12ab!@      
    // /author(blogger)     /dashboard, /write-blog, /
    // user/account         /subscription, /saved
    // /search/             /(search query)
    {
        path: '/login',
        element: <Login />
    },
    // {
    //     path: '/sign-up',
    //     element: <SignUp />
    // },
    {
        path: '/*',
        element: <NotFound />
    },
    {
        path: '/',
        element: <Layout><Outlet /></Layout>,
        children: [
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        // breaking news, explore, 
                    },
                    {
                        path: 'admin',
                        element: <Pricing />,
                        children: [
                            // add post
                            // posts
                            // bloggers
                        ]
                    },
                    {
                        path: 'user',
                        element: <Pricing />,
                        children: [
                            // saved
                            // subscriptions
                            // settings ???
                            // account
                        ] 
                    }

                ]
            },
        ]
    },
]);

export default router;