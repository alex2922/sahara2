"use client";

import React from "react";
import "./activity.scss";
import BlackBorder from "../(component)/border/BlackBorder";
import GreyBorder from "../(component)/border/GreyBorder";
import { useSearchParams } from "next/navigation";

const page = () => {


  const [searchParams] = useSearchParams();
  const activityId = searchParams.get("ActivityId");


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
      <div className="page-top parent">
        <h1>Activity</h1>
      </div>

      <div className="parent activitymain">
        <div className="container activitymain-container">
          <div className="left">
            <div className="img-box imghover"></div>
          </div>

          <div className="right">
            <h2>Activity Name</h2>
            {keyValue("Duration", "1hr")}
            {keyValue("Price", "1000")}
            {keyValue("Location", "Sahara Amusement")}
            {keyValue("Contact", "1234567890")}
            {keyValue("Contact", "1234567890")}

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
         {accordianData.map((item, index) => (
            <div className="faq-box" key={index}>
              <div
                className={`accordian-ques ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <p className="accordian-p">{item.title}</p>
                <span>
                  {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>

              {activeIndex === index && (
                <p className="accordian-ans">{item.content}</p>
              )}
            </div>
          ))}
         </div>
        </div>
      </div>





        </div>

      </div>


      <BlackBorder flip={true} margin={"-96px"} />



    </>
  );
};

export default page;
