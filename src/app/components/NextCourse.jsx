import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import CountdownTimer from "../Pages/CountdownTimer/page";

const NextCourse = () => {
  return (
    <section className="bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Title Section */}
        <div className="text-center space-y-4 mb-12">
          <h3 className="text-green-color text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-green-color before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-green-color after:ml-2">
            Dubai's Leading Digital Marketing Course
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Next Digital Marketing Training Batch is Starting From September
            2024
          </h2>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Course Info Section */}
        <div className="w-full h-auto border rounded-lg my-10 p-5 border-blue-hover-color hover:shadow-2xl shadow-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Section */}
            <div>
              <div className="mt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Learn More About Our Full Stack Digital Marketing Course
                </h2>
                <p className="text-lg text-gray-700">
                  For Professionals, Entrepreneurs & Job-Seekers (Become a
                  Google & Facebook Certified Professional)
                </p>

                <div className="flex justify-start flex-wrap mt-8 gap-3">
                  <button className=" bg-orange-color text-white font-medium text-17px flex items-center gap-2 justify-center w-200px h-44px rounded-md hover:bg-blue-hover-color hover:text-white transition-all  cursor-pointer">
                    Enroll me now
                    <IoArrowForwardCircleOutline />
                  </button>
                  <button className="border border-[#1D1B4C] bg-[#1D1B4C] text-white font-medium text-17px flex items-center gap-2 justify-center p-2 hover:scale-90 hover:bg-white hover:text-[#1D1B4C] transition-all cursor-pointer">
                    <FaDownload />
                    Download Course Curiculum
                  </button>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/next-course.png"
                height={450}
                width={400}
                alt="Course Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextCourse;
