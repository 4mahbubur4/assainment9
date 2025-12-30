import React from 'react';
import { format } from 'date-fns';

const Headers = () => {
    return (
        <div>
            <div className='flex justify-center flex-col items-center bg-[#5D3FD3] gap-3'>
           <h1 className='text-4xl'>Edu Care</h1>
            <p className='text-2xl'>Learning Platform</p>
            <p className='font-semibold text-accent'>{format(new Date(),'EEEE ,MMMM, dd yyyy')}</p>
        </div>
        </div>
    );
};

export default Headers;