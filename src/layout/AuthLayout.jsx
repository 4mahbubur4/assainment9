import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-gray-200 '>
            <header className='w-11/12 mx-auto py-4 bg-gray-200 '>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
                    <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;