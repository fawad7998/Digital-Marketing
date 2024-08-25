"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const trainingData = [
  {
    id: 1,
    imageSrc: "/person1.jpg",
    imageAlt: "Person 1",
    number: "01",
    category: "Individuals",
    count: 100,
    title: "We train individuals for careers in digital marketing.",
    description:
      "We equip individuals with the comprehensive skills and up-to-date knowledge needed to thrive in the fast-paced world of digital marketing. Our training programs are designed to prepare you for a successful career, offering hands-on experience and expert guidance in key areas such as SEO, social media, content marketing, and analytics. Whether you’re looking to start a new career or enhance your existing skills, we provide the tools and support to help you achieve your goals in the digital marketing industry.",
    buttonText: "Contact Us",
  },
  {
    id: 2,
    imageSrc: "/person2.jpg",
    imageAlt: "Person 2",
    number: "02",
    category: "Entrepreneurs",
    count: 100,
    title: "We Train Entrepreneurs for a successful Business launch.",
    description:
      "We provide entrepreneurs with the essential tools, strategies, and support needed to launch their businesses successfully. From initial concept development to market analysis, our comprehensive programs ensure that you start your entrepreneurial journey with a solid foundation. Whether you're starting a new venture or refining long-term strategies in a competitive market, we provide the guidance and tailored solutions you need.",
    buttonText: "Contact Us",
  },
  {
    id: 3,
    imageSrc: "/person3.jpg",
    imageAlt: "Person 3",
    number: "03",
    category: "Companies",
    count: 100,
    title: "We train Company teams for rapid expansion.",
    description:
      "We support company teams in driving rapid and sustainable business expansion through targeted planning, expert guidance, and targeted execution strategies. Our training programs are designed to foster scalable business growth by streamlining processes and capitalizing on growth opportunities.",
    buttonText: "Contact Us",
  },
  {
    id: 4,
    imageSrc: "/person4.webp",
    imageAlt: "Person 4",
    number: "04",
    category: "Consultancy",
    count: 100,
    title: "We provide Digital Marketing Consultancy.",
    description:
      "We offer expert digital marketing consultancy services to help businesses navigate the complexities of the online marketplace. Our consultants work closely with you to develop tailored strategies that align with your goals, ensuring that your brand presence is strong and effective in the digital landscape.",
    buttonText: "Contact Us",
  },
];

function DigitalMarketingCard() {
  const [couterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="w-full max-w-6xl mx-auto">
        {trainingData.map((data) => (
          <div
            key={data.id}
            className="bg-white border rounded-lg flex flex-col gap-2 lg:flex-row items-center lg:items-start mb-8"
          >
            <div className="lg:w-1/2 my-auto px-0 md:px-4 flex flex-col lg:flex-row items-center">
              <div className="relative flex-shrink-0">
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  className="rounded-lg md:w-400px md:h-300px"
                  width={500}
                  height={500}
                />
                <div className="absolute top-4 left-4 bg-orange-color text-white font-bold p-2 rounded-lg flex items-center">
                  <div className="flex items-center justify-center h-8 w-8 bg-white rounded-full text-orange-color">
                    <span className="font-bold">{data.number}</span>
                  </div>
                </div>
              </div>
              <div className="relative right-20 bg-white p-2 rounded-lg flex items-center shadow-md">
                <div className="bg-orange-color text-white p-2 rounded-full">
                  {/* Insert your icon here */}
                </div>
                <div className="ml-2 text-gray-700">
                  {couterOn && (
                    <p className="font-bold text-2xl">
                      <CountUp
                        start={0}
                        end={data.count}
                        duration={2}
                        delay={0}
                      />
                      +
                    </p>
                  )}
                  <p className="text-sm">{data.category}</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="p-3 lg:w-1/2 lg:ml-8 mt-6 lg:mt-0">
              <h2 className="text-2xl lg:text-3xl font-bold text-heading-color mb-4">
                {data.title}
              </h2>
              <p className="text-text-color mb-6">{data.description}</p>
              <button className="bg-orange-color text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-color transition duration-200">
                {data.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </ScrollTrigger>
  );
}

export default DigitalMarketingCard;
