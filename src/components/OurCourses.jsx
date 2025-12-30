import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const OurCourses = () => {

    const [courses, setCourses] = useState([]);

   useEffect(() => {
        fetch('/learn.json')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(err => console.error("Error loading JSON:", err));
    }, []);

    return (
        <div className='flex items-center gap-5 bg-gray-300 p-3'>
            <p className='bg-purple-400 text-white px-3'>OurCourses</p>
           
               <Marquee className='flex gap-10'>
                 {
                courses.map(course => (
                    <pre key={course.skillId} className="font-bold">
                              ***   {course.skillName}       ***                
                    </pre>
                ))
            }
               </Marquee>
            

        </div>
    );
};

export default OurCourses;