import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Shered/Navbar';
import Footer from '../component/Shered/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className='w-96-[1300px]  mx-16'>
           
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;