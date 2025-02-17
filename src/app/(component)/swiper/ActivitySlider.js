"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function ActivityCard(props) {
  return (
    <div className="card">
      <div className="imgbox"></div>
      <h2>
        {props.title} <span> {props.title_highlight}</span>
      </h2>
      <p>
        Experience the thrill of racing on our state-of-the-art karting tracks,
        designed for speed enthusiasts of all levels.
      </p>
      <div className="btns">
        
        <a href="#" className="btn2 sndbtn">
          Learn More
        </a>
        <a href="#" className="btn fstbtn">
          Book Now
        </a>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    title: "Go",
    title_highlight: "karting",
    desc: "Experience the thrill of racing on our state-of-the-art karting tracks, designed for speed enthusiasts of all levels.",
  },
  {
    id: 2,
    title: "Quad",
    title_highlight: "Bike",
    desc: "Experience the thrill of racing on our state-of-the-art karting tracks, designed for speed enthusiasts of all levels.",
  },
  {
    id: 3,
    title: "Dune ",
    title_highlight: "Buggy",
    desc: "Experience the thrill of racing on our state-of-the-art karting tracks, designed for speed enthusiasts of all levels.",
  },
  {
    id: 4,
    title: "Mini",
    title_highlight: "GP",
    desc: "Experience the thrill of racing on our state-of-the-art karting tracks, designed for speed enthusiasts of all levels.",
  },
  {
    id: 5,
    title: "Paintball",
    title_highlight: " Fight",
    desc: "Experience the thrill of racing on our state-of-the-art karting tracks, designed for speed enthusiasts of all levels.",
  },
];

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
        {data.map((card, index) => (
          <SwiperSlide key={index}>
            <ActivityCard title={card.title}  title_highlight={card.title_highlight} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ActivitySlider;
