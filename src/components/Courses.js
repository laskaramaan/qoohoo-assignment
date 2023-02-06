import React from "react";
import ProfileImage from "../assets/profile-image.png";
import RightArrow from "../assets/arrow-right-icon.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
const CoursesCards = [
  {
    image: card1,
    oneLiner: "Toledo",
    joinBtn: true,
  },
  {
    image: card2,
    oneLiner: "Pembroke Pines",
    joinBtn: true,
  },
  {
    image: card3,
    oneLiner: "Naperville",
    joinBtn: true,
  },
];

const Courses = () => {
  return (
    <>
      <div className="courses-container">
        <h1>Checkout my courses</h1>
        <div className="cards-container">
          {CoursesCards.map((cards) => {
            return (
              <>
                <div className="card">
                  <img src={cards.image} />
                  <h2>{cards.oneLiner}</h2>
                  {cards.joinBtn ? (
                    <>
                      <button className="join-btn">
                        Join Now{" "}
                        <span>
                          <img src={RightArrow} />
                        </span>
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
