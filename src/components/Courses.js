import React from "react";
import ProfileImage from "../assets/profile-image.png";
import RightArrow from "../assets/arrow-right-icon.png";

import { CoursesCards } from "./config";

const Courses = () => {
  return (
    <>
      <div className="flex flex-col pt-[60px] pb-[60px] bg-[#C1CFFF] justify-center items-center self-center gap-[36px]">
        <h1 className="font-[800] sm:text-[40px] text-[28px]">
          Checkout my courses
        </h1>
        <div className="flex sm:flex-row flex-col gap-[36px] ">
          {CoursesCards.map((cards) => {
            return (
              <>
                <div className="bg-[#FFD7B1] p-4 rounded-md">
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
      </div>
    </>
  );
};

export default Courses;
