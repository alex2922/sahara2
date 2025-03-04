"use client";

import React, { useState } from "react";
import "./FAQ.scss";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  
 
  
  const [data, setData] = useState([
    {
      question: "Lorem ipsum dolor sit amet1",
      asnwer:
      question: "Lorem ipsum dolor sit amet1",
      asnwer:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
    {
      question: "2Lorem ipsum dolor sit amet1",
      asnwer:
      question: "2Lorem ipsum dolor sit amet1",
      asnwer:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
    {
      question: "Three Lorem ipsum dolor sit amet1",
      asnwer:
      question: "Three Lorem ipsum dolor sit amet1",
      asnwer:
        "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
    {
      question: "Four orem ipsum dolor sit amet1",
      asnwer: "lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nisi praesentium ipsam!",
    },
  ]);


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
    </>
  );
};

export default FAQ;
