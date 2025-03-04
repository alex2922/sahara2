"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import './ActivitySlider.scss';
import img1 from '../../../../public/gokart.jpg';

function ActivityCard(props) {
  return (
    <div className="card">
      <div className="imgbox" style={{ backgroundImage: `url(${props.image.src})` }}
      ></div>
      <h2>
        {props.title} <span> {props.title_highlight}</span>
      </h2>
      <p>
        Experience the thrill of racing on our state-of-the-art karting tracks,
        designed for speed enthusiasts of all levels.
      </p>
      <div className="btns">

        <a href="#" className=" sndbtn">
          Learn More
        </a>
        <a href="#" className=" fstbtn">
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
    image: img1,
  },
  {
    id: 2,
    title: "Quad",
    title_highlight: "Bike",
    desc: "Experience the thrill of racing on our state-of-the-art karting tracks, designed for speed enthusiasts of all levels.",
    image: img1,
  },
  {
    id: 3,
    title: "Dune ",
    title_highlight: "Buggy",
    desc: "Experience the thrill of racing on our state-of-the-art karting tracks, designed for speed enthusiasts of all levels.",
    image: img1,
  },
  {
    id: 4,
    title: "Mini",
    title_highlight: "GP",
    desc: "Experience the thrill of racing on our state-of-the-art karting tracks, designed for speed enthusiasts of all levels.",
    image: img1,
  },
  {
    id: 5,
    title: "Paintball",
    title_highlight: " Fight",
    desc: "Experience the thrill of racing on our state-of-the-art karting tracks, designed for speed enthusiasts of all levels.",
    image: img1,
  },
];

function ActivitySlider() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={false}
        loop={true}
       
        breakpoints={{
          
          280: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
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
          delay: 250000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="adventureSwiper"
      >
        {data.map((card, index) => (
          <SwiperSlide key={index}>
            <ActivityCard title={card.title} title_highlight={card.title_highlight} image={card.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ActivitySlider;
