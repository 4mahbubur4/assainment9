import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import guitar from '../assets/guiter.jpg';
import spoken from '../assets/spokenEng.jpg';
import graphic from '../assets/graphic.jpg';
import photography from '../assets/photograpphy.jpg';
import digital from '../assets/digital.png';
import web from '../assets/web.jpg';





import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    
    <div className="h-96 w-6/12 mx-auto bg-gray-100 mt-5">
        
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-full"
      >
       
        <SwiperSlide className='flex items-center justify-center'>
          <img className='h-96 w-full' src={guitar} alt="" />
        </SwiperSlide>

        
        <SwiperSlide className="flex items-center justify-center ">
          <img className='h-96 w-full' src={spoken} alt="" />
        </SwiperSlide>

        
        <SwiperSlide className="flex items-center justify-center">
          <img className='h-96 w-full' src={graphic} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center ">
          <img className='h-96 w-full' src={photography} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center ">
          <img className='h-96 w-full' src={digital} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center ">
          <img className='h-96 w-full' src={web} alt="" />
        </SwiperSlide>

        
        <div className="autoplay-progress" slot="container-end" style={{
            position: 'absolute', right: '16px', bottom: '16px', zIndex: '10', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white'
        }}>
          <svg viewBox="0 0 48 48" ref={progressCircle} style={{ 
              position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', strokeDasharray: '125.6', strokeDashoffset: 'calc(125.6 * (1 - var(--progress)))', stroke: 'white', strokeWidth: '4', fill: 'none', transform: 'rotate(-90deg)'
          }}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;