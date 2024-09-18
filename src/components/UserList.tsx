"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";

const UserList = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      swiperInstance.on('slideChange', () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, [swiperRef]);

  return (
    <div>
      <div className="flex w-[350px] items-center h-[80px] justify-center relative gap-2 bg-white py-3 px-4 shadow-md">
        {/* Prev Button - Disable when at the beginning */}
        <div className={`button-prev text-2xl w-[25px] rounded-full bg-[#E9F0F6] h-[25px] text-primary ${isBeginning ? 'hidden pointer-events-none' : ''}`}>
          <MdOutlineKeyboardArrowLeft />
        </div>

        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          modules={[Navigation, FreeMode]}
          className="mySwiper"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-r from-[#CA52AB] to-[#a97a80] border-2 rounded-full p-1 relative">
               <Link href={''}>
               <Image
                  src="/assets/images/profile.jpg"
                  alt="Sample Image"
                  width={55}
                  height={55}
                  className="rounded-full  bg-white p-[2px]"
                /></Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button - Disable when at the end */}
        <div className={`button-next text-2xl w-[25px] rounded-full bg-[#E9F0F6] h-[25px] text-primary ${isEnd ? 'hidden pointer-events-none' : ''}`}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default UserList;
