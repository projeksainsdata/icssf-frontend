import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import venueImage from '../assets/images/grandmercure.jpeg';
import grand2 from '../assets/images/grandmercure2.jpg';
import grand3 from '../assets/images/grandmercure3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Venue = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-20 justify-between text-left mt-[120px] md:px-[100px] mb-20 px-10">
        <div className="mt-0 md:mt-10 order-2 md:order-1">
          <h1 className="text-4xl md:text-3xl font-spaceGrotesk text-center md:text-left text-colorGreen font-bold mb-[50px]">
            Venue
          </h1>
          <div className="md:hidden mb-10">
          <Swiper navigation={true} modules={[Navigation]} className="w-full h-full">
            <SwiperSlide>
              <img src={venueImage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={grand2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={grand3} />
            </SwiperSlide>
          </Swiper>
          </div>
          <h1 className="md:text-2xl font-spaceGrotesk text-white font-bold">
            Hotel Grand Mercure Lampung
          </h1>
          <h1 className="md:text-xl font-spaceGrotesk text-white mb-0 md:mb-[100px]">
            Jl Raden Intan, 88, Pelita Engal 35117 BANDAR LAMPUNG INDONESIA
          </h1>
          <div className="mt-[50px] md:mt-[150px] flex">
            <Link
              className="bg-colorGreen flex w-fit py-2 px-7 font-bold font-spaceGrotesk items-center rounded-full gap-1"
              to={'/'}
            >
              Open Maps
              <IconArrowRight className="w-5 ml-1" />
            </Link>
          </div>
        </div>
        <div className="md:mb-0 order-1 md:order-2 hidden md:block">
          <Swiper navigation={true} modules={[Navigation]} className="w-[40em] h-100">
            <SwiperSlide>
              <img src={venueImage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={grand2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={grand3} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Venue;
