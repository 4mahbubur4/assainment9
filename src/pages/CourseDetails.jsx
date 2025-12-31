import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaPlay, FaStar, FaCalendarAlt, FaClock, FaUserFriends, FaChalkboardTeacher } from 'react-icons/fa';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import CourseDetailsCard from '../components/CourseDetailsCard';
import Navbar from '../components/Navbar';

const CourseDetails = () => {
 
   const data = useLoaderData();
   const {id} = useParams();
   const [course, setCourse] = useState({});
  

   useEffect(()=>{

    const  coursesData = data.find(courseData=>courseData.skillId == id);
    setCourse(coursesData)
   },[data, id]);
    
  
  return (
    <div>
        <header>
          <Headers></Headers>
          <Navbar></Navbar>
        </header>
        <main className='w-11/12 mx-auto py-3'>
         <h2 className='font-bold mb-5'>Course details</h2>
         <CourseDetailsCard course={course}></CourseDetailsCard>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
    </div>
  );
};

export default CourseDetails;