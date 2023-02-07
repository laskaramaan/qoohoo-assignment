import React, { useRef, useEffect, useState } from "react";
import HeroMan from "../assets/hero-man-1.png";
import BlackRightArrow from "../assets/black-right-arrow.png";
import { pointers } from "../config";

const Hero = () => {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  console.log("myElementIsVisible", myElementIsVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <>
      <div
        ref={myRef}
        className={`${
          myElementIsVisible
            ? "animation-1 p-[20px] flex flex-col bg-[#161e3c] text-[#fff] pt-[80px] pb-[60px]"
            : "p-[20px] flex flex-col bg-[#161e3c] text-[#fff] pt-[80px] pb-[60px]"
        }`}
      >
        <div className=" flex flex-col sm:flex  items-center sm:flex-row  sm:justify-center sm:gap-[48px]">
          <img className="w-[320px]  sm:h-[382px] sm:w-[461px]" src={HeroMan} />

          <div className="text-[#fff] self-center">
            <h1 className="text-[28px] pt-[20px] sm:pt-[0px] sm:text-[44px] font-[700] sm:w-[421px]">
              <span className="text-[#fb9b42] font-[900]">Get ready </span> to
              grow with us ⭐️{" "}
            </h1>
            <p className="font-[400] text-[24px] mt-[24px]">
              Start with us today
            </p>
            <button className="flex justify-center py-[16px] px-[48px] bg-[#fb9b43] font-[700] text-[24px] align-middle text-[black] rounded-md mt-[24px] gap-[13px]">
              View all courses
              <span>
                {" "}
                <img
                  className="h-[24px] w-[24px] relative top-[6px]"
                  src={BlackRightArrow}
                />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-center self-center mt-[40px] gap-[23px]">
          {pointers.map((pointer) => {
            return (
              <>
                <div className="w-[90px] sm:w-[321px] flex flex-col justify-center items-center gap-[24px]">
                  <img
                    className="h-[30px] sm:h-[84px] sm:w-[84px]"
                    src={pointer.icon}
                  />
                  <p className="flex justify-center items-center text-center">
                    {pointer.oneLiner}
                  </p>
                </div>
              </>
            );
          })}
        </div>
        <style>
          {`
        .animation-1{
          animation: fadeIn 4s;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        `}
        </style>
      </div>
    </>
  );
};

export default Hero;
