import React, { useState } from "react";
import BootcampImg from "../assets/bootcamp_img.png";
import RightArrow from "../assets/arrow-right-icon.png";
const Bootcamp_data = [
  {
    title: "3 Months",
    head: "Amet minim mollit ",
    desc: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    img: BootcampImg,
    joinBtn: true,
  },
  {
    title: "6 Months",
    head: "Amet minim mollit ",
    desc: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",

    img: BootcampImg,
    joinBtn: true,
  },
  {
    title: "12 Months",
    head: "Amet minim mollit ",
    desc: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",

    img: BootcampImg,
    joinBtn: true,
  },
];

const Bootcamp = () => {
  const [activeTitle, setActive] = useState(Bootcamp_data[0].title);
  return (
    <>
      <div className="flex flex-col py-[60px] justify-center items-center">
        <h1 className="text-[40px] font-[800] leading-[60px] pb-[36px]">
          Bootcamps
        </h1>
        <div className="flex flex-row sm:gap-[36px] gap-[10px] mb-[24px]">
          {Bootcamp_data.map((t) => {
            return (
              <div
                key={t.title}
                className={`${
                  activeTitle === t.title ? "bg-[#FB9B43]" : "bg-[#FFD7B1]"
                } sm:py-[16px] py-[12px] sm:px-[68px] px-[20px] sm:text-[28px] text-[14px] font-[700] rounded-md`}
                onClick={() => {
                  setActive(t.title);
                }}
              >
                {t.title}
              </div>
            );
          })}
        </div>
        <div>
          {Bootcamp_data.map((d) => {
            return (
              <>
                {d.title === activeTitle && (
                  <div className="flex sm:flex-row flex-col-reverse sm:p-[60px] p-[20px] bg-[#FFD7B1] rounded-lg">
                    <div className="flex flex-col pt-[14px] ">
                      <h1 className="font-[800] sm:text-[44px] text-[28px] leading-[52px] pb-[16px] ">
                        {d.head}
                      </h1>
                      <p className="font-[600] sm:text-[24px] text-[18px] leading-[36px] pb-[28px] max-w-[563px]">
                        {d.desc}
                      </p>
                      <div className="max-w-[280px]">
                        <button className="flex flex-row py-[12px] gap-[13px] rounded-md bg-[#161E3C] justify-center w-[-webkit-fill-available] text-[#fff] text-[17px] font-[700]">
                          Join Now <img src={RightArrow} />
                        </button>
                      </div>
                    </div>
                    <div>
                      <img className="w-[423px] h-[328px]" src={d.img} />
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Bootcamp;
