import React from "react";
import { CiDesktopMouse1 } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="h-[100vh] bg-cover bg-[url('/new.png')] ">
        <div className="border border-transparent">
          <div className="items-center text-[#1D1B4C] lg:mt-44 mt-70px pl-4 md:mt-16 w-full max-w-6xl lg:mx-auto">
            <p className="text-3xl lg:text-5xl font-bold text-balance">
              #1 Full Stack Digital Marketing Course IN UAE With Assured
              Placement Support
            </p>
            <br />
            <p className="text-20px lg:text-3xl font-normal text-balance">
              Equip yourself with the skills and knowledge needed to excel in
              the dynamic field of digital marketing with live online training
              in Dubai.
            </p>

            <div className="flex flex-wrap mt-10 gap-y-4 gap-x-24">
              <button className="border border-[#1D1B4C] bg-[#1D1B4C] text-white font-medium text-17px flex items-center gap-2 justify-center w-250px h-50px hover:scale-90 hover:bg-white hover:text-[#1D1B4C] transition-all cursor-pointer">
                <CiDesktopMouse1 className="hover:bg-[#1D1B4C]" />
                Click Here To Enroll
              </button>
              <button className="border border-[#1D1B4C] bg-[#1D1B4C] text-white font-medium text-17px flex items-center gap-2 justify-center w-280px h-50px hover:scale-90 hover:bg-white hover:text-[#1D1B4C] transition-all cursor-pointer">
                <FaDownload />
                Download Course Curiculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
