import React from "react";
import HeroMan from "../assets/hero-man.png";
import BlackRightArrow from "../assets/black-right-arrow.png";
import PointerIcon from "../assets/pointer-icon.png";

const pointers = [
  {
    icon: PointerIcon,
    oneLiner: "500+ happy customers ",
  },
  {
    icon: PointerIcon,
    oneLiner: "Learn as you go ",
  },
  {
    icon: PointerIcon,
    oneLiner: "Self-paced learning",
  },
];

const Hero = () => {
  return (
    <>
      <div className="p-[20px] flex flex-col bg-[#161e3c] text-[#fff] pt-[80px] pb-[60px] ">
        <div className="flex flex-col sm:flex  items-center sm:flex-row  sm:justify-center sm:gap-[48px]">
          <img className="w-[320px]  sm:h-[326px] sm:w-[460px]" src={HeroMan} />

          <div className="text-[#fff] self-center">
            <h1 className="text-[28px] pt-[20px] sm:text-[44px] font-[700]">
              <span className="text-[#fb9b42] font-[900]">Get ready </span> to
              grow with us ⭐️{" "}
            </h1>
            <p className="font-[400] text-[24px] mt-[24px]">
              Start with us today
            </p>
            <button className="flex justify-center p-[16px] bg-[#fb9b43] font-[700] text-[24px] align-middle text-[black] rounded-md mt-[24px]">
              View all courses
              <img className="h-[24px] w-[24px]" src={BlackRightArrow} />
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
      </div>
    </>
  );
};

export default Hero;
