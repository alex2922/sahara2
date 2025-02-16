"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function ActivityCard(props) {
  return (
    <div className="card">
      <div className="imgbox"></div>
      <h2>Go <span>Karting</span></h2>
      <p>Experience the thrill of racing on our state-of-the-art karting tracks, designed for speed enthusiasts of all levels.</p>
      <div className="btns">
        <a href="#" className="btn fstbtn">Book Now</a>
        <a href="#" className="btn2 sndbtn">Learn More</a>
      </div>
    </div>
  );
}



function ActivitySlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><ActivityCard /></SwiperSlide>
        <SwiperSlide><ActivityCard /></SwiperSlide>
        <SwiperSlide><ActivityCard /></SwiperSlide>
        <SwiperSlide><ActivityCard /></SwiperSlide>
        <SwiperSlide><ActivityCard /></SwiperSlide>


      </Swiper>
    </>
  );
}

export default ActivitySlider;
