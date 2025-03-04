"use client";

import React, { useState } from "react";
import "./activity.scss";
import BlackBorder from "../(component)/border/BlackBorder";
import GreyBorder from "../(component)/border/GreyBorder";
import { useSearchParams } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import "../(component)/home/faq/FAQ.scss"
const page = () => {


  const [searchParams] = useSearchParams();
  // const activityId = searchParams.get("ActivityId");
  const [activeIndex, setActiveIndex] = useState(0);


  const [data, setData] = useState([
    {
      question: "Lorem ipsum dolor sit amet1",
      asnwer:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
    {
      question: "2Lorem ipsum dolor sit amet1",
      asnwer:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
    {
      question: "Three Lorem ipsum dolor sit amet1",
      asnwer:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
    {
      question: "Four orem ipsum dolor sit amet1",
      asnwer:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
  ]);


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
                <div className="faq-box-container">
                  {data.map((item, index) => (
                    <div
                      className={`faq-box ${activeIndex === index ? "active" : ""}`}
                      key={index}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="faq-ques">
                        <h3> {item.question} </h3>
                        <span>
                          <IoIosArrowDown />
                        </span>
                      </div>
                      <div className="faq-ans">{item.asnwer}</div>
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
  );
};

export default page;
