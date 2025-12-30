import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../Headers';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OurCourses from '../OurCourses';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Headers></Headers>
                <Navbar></Navbar>
                <section className='w-11/12 mx-auto'>
                    <OurCourses></OurCourses>
                </section>
            </header>
            <main>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="left_nav"></section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;