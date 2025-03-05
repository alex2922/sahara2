"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./activity.scss";
import BlackBorder from "../(component)/border/BlackBorder";
import GreyBorder from "../(component)/border/GreyBorder";
import { IoIosArrowDown } from "react-icons/io";
import "../(component)/home/faq/FAQ.scss";
import { getActivityByTitle, getFaqByPage } from "../(api)/apis";

const page = () => {
  const searchParams = useSearchParams();
  const [activityId, setActivityId] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [testimonialData, setTestimonialData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = searchParams.get("activityid");
    setActivityId(id);

    if (!id) return;

    setIsLoading(true);
    getActivityByTitle(id).then((data) => {
      setActivityData(data.data);
    });


    getFaqByPage(id).then((data) => {
      setTestimonialData(data.data);

      setIsLoading(false);
    });





    setIsLoading(false);
  }, [searchParams]);

  useEffect(() => {
    console.log("activityData: ", activityData);
  }, [activityData]);


  function keyValue(key, value) {
    return (
      <div className="key-value">
        <div className="key">{key}</div>
        <div className="value">{value}</div>
      </div>
    );
  }

  return (
    <>
      {activityData && testimonialData &&
        <>
          <div className="page-top parent">
            <h1>{activityData.title}</h1>
          </div>
          <div className="parent activitymain">
            <div className="container activitymain-container">
              <div className="left">
                <div className="img-box imghover" style={{ backgroundImage: `url(${activityData.image})` }}></div>
              </div>

              <div className="right">
                <h2>{activityData.title}</h2>

                {activityData.additionalInfo &&
                  Object.entries(activityData.additionalInfo).map(([key, value]) => (
                    <div className="key-value" key={key}>
                      <div className="key">{key}</div>
                      <div className="value">{value}</div>
                    </div>
                  ))}
                {/* {keyValue("Duration", "1hr")}
                
                {keyValue("Price", "1000")}
                {keyValue("Location", "Sahara Amusement")}
                {keyValue("Contact", "1234567890")}
                {keyValue("Contact", "1234567890")} */}

                <a href="#" className="btn">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <GreyBorder margin={"-100px"} />
          <div className="activityDescription parent">
            <div className="activityDescription-container container">
              <div className="faq parent">
                <div className="container faq-container">
                  <h2>
                    Plan Your <span>Visit</span>
                  </h2>
                  <div className="faq-box-container">
                    <div className="faq-box-container">
                      {testimonialData.map((item, index) => (
                        <div
                          className={`faq-box ${activeIndex === index ? "active" : ""
                            }`}
                          key={index}
                          onClick={() => setActiveIndex(index)}
                        >
                          <div className="faq-ques">
                            <h3> {item.question} </h3>
                            <span>
                              <IoIosArrowDown />
                            </span>
                          </div>
                          <div className="faq-ans">{item.answer}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlackBorder flip={true} margin={"-96px"} />

        </>
      }
    </>
  );
};

export default page;
