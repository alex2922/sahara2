"use client";

import React, { useEffect, useState } from "react";
import "./Promotional_activity.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { getAllPromoActivity } from "@/app/(api)/apis";

const Promotional_activity = () => {
  const [knowMore, setKnowMore] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPromoActivity()
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <>
      <div className="promo_acitvity_parent parent">
        <div className="promo_activity_cont container">
          <h2>
            Our Exciting <span>Promotional Adventures</span>
          </h2>
          <div className="section">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides={false}
              loop={true}
              autoplay={{
                delay: 25000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="promoSwiper"
            >
              {data.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="content_section"
                    style={{
                      backgroundImage: `url(${item.data.image})`, // Fixed syntax
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="overlay"
                      onClick={() => setKnowMore(true)}
                    ></div>

                    <div className={knowMore ? "content active" : "content"}>
                      <h2 className="">{item.data.title}</h2>
                      <p className={knowMore ? "details active" : "details"}>
                        {item.data.description}
                      </p>
                    </div>

                    <div
                      className="btn"
                      id="know_more"
                      onClick={() => setKnowMore(true)}
                    >
                      Know More
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotional_activity;
