import React, { useRef, useEffect, useState } from "react";
import ProfileImage from "../assets/profile-image.png";
import RightArrow from "../assets/arrow-right-icon.png";

import { CoursesCards } from "../config";

const Courses = () => {
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
            ? "animation-1 flex flex-col flex-wrap pt-[60px] pb-[60px] bg-[#C1CFFF] justify-center items-center self-center gap-[36px]"
            : "flex flex-col flex-wrap  pt-[60px] pb-[60px] bg-[#C1CFFF] justify-center items-center self-center gap-[36px]"
        }  `}
      >
        <h1 className="font-[800] sm:text-[40px] text-[28px]">
          Checkout my courses
        </h1>
        <div className="flex sm:flex-row flex-wrap justify-center flex-col gap-[36px] ">
          {CoursesCards.map((cards) => {
            return (
              <>
                <div className="bg-[#FFD7B1] hover:bg-[#f2b983] p-4 rounded-md">
                  <img className="h-[280px]" src={cards.image} />
                  <h2 className="font-[800] text-[24px] leading-[36px] py-[16px] ">
                    {cards.oneLiner}
                  </h2>
                  {cards.joinBtn ? (
                    <>
                      <button className="flex flex-row py-[12px] gap-[13px] rounded-md bg-[#161E3C] justify-center w-[-webkit-fill-available] text-[#fff] text-[17px] font-[700]">
                        Join Now <img src={RightArrow} />
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
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

export default Courses;
