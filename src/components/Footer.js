import React from "react";
import PoweredBy from "../assets/powered-by.png";
const Footer = () => {
  return (
    <>
      <div className="flex sm:flex-row py-[32px] justify-center sm:gap-[691px] gap-[20px]  bg-[#C1CFFF]">
        <img className="w-[187px] h-[28px]" src={PoweredBy} />{" "}
        <ul className="flex flex-row sm:gap-[32px]  text-[14px] font-[400] leading-[20px]">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
