"use client";

import React, { useState } from "react";
import "./FAQ.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index); // Set the active index to the clicked one
  };

  const accordianData = [
    {
      title: "Lorem ipsum dolor sit amet1",
      content:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
    {
      title: "2Lorem ipsum dolor sit amet1",
      content:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
    {
      title: "Three Lorem ipsum dolor sit amet1",
      content:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
    {
      title: "Four orem ipsum dolor sit amet1",
      content:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
  ];

  return (
    <>
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
    </>
  );
};

export default FAQ;
