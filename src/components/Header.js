import { useState } from "react";
import ProfileImage from "../assets/profile-image.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-center sm:gap-[483px] gap-[133px] py-[16px] bg-[#161E3C]">
      <div className="flex flex-row cursor-pointer text-[16px] font-[700] text-[#fff] gap-[12px] items-center">
        <img className="h-[44px] w-[44px] cursor-pointer" src={ProfileImage} />
        <p>Annette Black</p>{" "}
      </div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8  bg-gray-600"></span>
            <span className="block h-0.5 w-8  bg-gray-600"></span>
            <span className="block h-0.5 w-8  bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b cursor-pointer border-gray-400 my-8 uppercase">
                Programs
              </li>
              <li className="border-b cursor-pointer border-gray-400 my-8 uppercase">
                Retreats
              </li>
              <li className="border-b cursor-pointer border-gray-400 my-8 uppercase">
                Blogs
              </li>
              <li className="border-b cursor-pointer border-gray-400 my-8 uppercase">
                Contact us{" "}
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">Login</li>
            </ul>
          </div>
        </section>

        <div className="DESKTOP-MENU hidden lg:flex  flex-row gap-[32px] text-[16px] font-[700] text-[#fff] list-none items-center">
          <li className="cursor-pointer">Programs</li>
          <li className="cursor-pointer">Retreats</li>
          <li className="cursor-pointer">Blogs</li>
          <li className="cursor-pointer">Contact us </li>

          <div className="border-solid border-2 border-[#fff] cursor-pointer rounded-[100px] p-[10px]">
            Login
          </div>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
