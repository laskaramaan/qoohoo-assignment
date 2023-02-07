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
      <div className="">
        <h1>Bootcamps</h1>
        <div className="titles-container">
          {Bootcamp_data.map((t) => {
            return (
              <div
                key={t.title}
                className={`${
                  activeTitle === t.title ? "active" : "inactive"
                } title `}
                onClick={() => {
                  setActive(t.title);
                }}
              >
                {t.title}
              </div>
            );
          })}
        </div>
        <div className="desc-container">
          {Bootcamp_data.map((d) => {
            return (
              <>
                {/* {d.title === activeTitle && d.desc} */}
                {d.title === activeTitle && (
                  // <div>
                  //   {d.desc} <img className="desc-img" src={d.img} />
                  //   <button className="join-btn">
                  //     Join Now{" "}
                  //     <span>
                  //       <img src={RightArrow} />
                  //     </span>
                  //   </button>
                  // </div>
                  <div className="desc">
                    <div className="desc-p1">
                      <h1>{d.head}</h1>
                      <p>{d.desc}</p>
                      <button className="join-btn">
                        {" "}
                        <span>
                          <img src={RightArrow} />{" "}
                        </span>{" "}
                      </button>
                    </div>
                    <div className="desc-p2">
                      <img className="desc-img" src={d.img} />
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
