"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Testimonial.scss";
import { IoMdStar } from "react-icons/io";


function Testimonial() {


  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eaque reiciendis magnam quia corporis eveniet recusandae.",
      name: "Customer Name",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eaque reiciendis magnam quia corporis eveniet recusandae.",
      name: "Customer Name",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eaque reiciendis magnam quia corporis eveniet recusandae.",
      name: "Customer Name",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eaque reiciendis magnam quia corporis eveniet recusandae.",
      name: "Customer Name",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, eaque reiciendis magnam quia corporis eveniet recusandae.",
      name: "Customer Name",
    },
  ];

  return (
    <div className="t-parent parent">
      <div className="t-container container">
        <h2>
          What <span>Our Visitors</span> Say
        </h2>
        <div className="t-swiper-box">
          <Swiper
            spaceBetween={10}
            loop={true}
            slidesPerView={3}
            centeredSlides={false}

            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              650: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 0,
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
            className="t-Swiper"
          >
            {data.map((testimonial, index) => (
              <SwiperSlide key={index} >
                <div className="t-card">
                  <div className="t-stars">
                    <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar /><IoMdStar />
                  </div>
                  <p className='t-para'>
                    {testimonial.text}
                  </p>
                  <h4>  {testimonial.name}</h4>
                </div>
              </SwiperSlide>

            ))}

          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
