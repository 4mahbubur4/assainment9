import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../Headers';
import Navbar from '../Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Headers></Headers>
                <Navbar></Navbar>
            </header>
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="left_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;