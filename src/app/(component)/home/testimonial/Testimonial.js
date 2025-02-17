"use client";

import React from "react";
import "./Testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star } from "lucide-react";

const Testimonial = () => {
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
    }
  ];

  return (
    <div className="testimonials">
      <div className="container testimonials-container">
        <h2>
          What <span>Our Visitors</span> Say
        </h2>

        <div className="testimonial-swiper">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              400: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonialcard">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="var(--accent)" stroke="none" />
                    ))}
                  </div>

                  <p>{testimonial.text}</p>
                  <strong>{testimonial.name}</strong>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
