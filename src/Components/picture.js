import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Picture() {
  return (
    <div className="Image w-full h-[500px] relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full relative z-0"
      >
        <SwiperSlide>
          <Image
            src="/images/env2.jpg"
            alt="Environment"
            width={700}
            height={700}
            className="w-full h-full object-cover brightness-90"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/env5.jpg"
            alt="Environment"
            width={700}
            height={700}
            className="w-full h-full object-cover brightness-90"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/env3.jpg"
            alt="Environment"
            width={700}
            height={700}
            className="w-full h-full object-cover brightness-90"
          />
        </SwiperSlide>
        <div className="welcome absolute z-50 left-2 sm:left-10 bottom-10 bg-gray-400 bg-opacity-70 w-[350px] rounded p-4">
          <h1 className="text-4xl font-bold">Welcome to Env.</h1>
          <p className="text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s.
          </p>
        </div>
      </Swiper>
    </div>
  );
}