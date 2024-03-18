import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Favarates from '../Pages/Favarates/Favarates';
import Login from '../Pages/Login/Login';
import ErrorPage from '../component/ErrorPage/ErrorPage';
import Phone from '../component/phone/Phone';
import Register from '../Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/public/Phones.json')
                
            },
            {
                path:"/favarate",
                element:<Phone></Phone>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<Register></Register>
            },
           {
            path:"/phones/:id",
            element:<Phone></Phone>,
            loader:()=>fetch('/public/Phones.json')

           }

        ]
    }
])

export default router;