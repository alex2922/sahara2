"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./ActivitySlider.scss";

import { getAllActivities } from "@/app/(api)/apis";

function ActivityCard(props) {
  return (
    <div className="card">
      <div
        className="imgbox"
        style={{ backgroundImage: `url(${props?.image})` }}
      ></div>
      <h2>
        {props?.title} <span> {props?.title_highlight}</span>
      </h2>
      <p>{props?.desc}</p>
      <div className="btns">
        <a href={props?.pagelink} className=" sndbtn">
          Learn More
        </a>
        <a href={props?.booklink} className=" fstbtn">
          Book Now
        </a>
      </div>
    </div>
  );
}

function ActivitySlider() {
  const [activityData, setActivityData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllActivities().then((data) => {
      setActivityData(data);
      setIsLoading(false);
    });
  }, []);


  return (
    <>
      {activityData && (
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          centeredSlides={false}
          loop={true}
          breakpoints={{
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
          {activityData.map((card, index) => (
            <SwiperSlide key={index}>
              <ActivityCard
                title={card?.data?.title}
                desc={card?.data?.description.slice(0,50)}
                image={card?.data?.image}
                pagelink={`/activity?activityid=${card?.data?.title}`}
                booklink={`/contact?activityid=${card?.data?.title}`}

                
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default ActivitySlider;
