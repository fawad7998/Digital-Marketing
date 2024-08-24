"use client";
import React, { useEffect, useState } from "react";
import { LuClock } from "react-icons/lu";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Success() {
  const [couterOn, setCounterOn] = useState(false);

  const data = [
    {
      icon: <LuClock className="text-5xl" color="#E57028" />,
      number: 11,
      title: "Successful Batches",
    },
    {
      icon: <LuClock className="text-5xl" color="#E57028" />,
      number: 120,
      title: "Hours Of Timing",
    },
    {
      icon: <LuClock className="text-5xl" color="#E57028" />,
      number: 120,
      title: "Skills & Business Models",
    },
    {
      icon: <LuClock className="text-5xl" color="#E57028" />,
      number: 3500,
      title: "Success Stories",
    },
  ];
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section className="bg-orange-500">
          <div className="mx-auto max-w-6xl py-12 px-4 h-auto md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="bg-white rounded-full p-3 w-fit">
                    {item.icon}
                  </div>
                  {couterOn && (
                    <div className="text-5xl text-white font-bold">
                      <CountUp
                        start={0}
                        end={item.number}
                        duration={2}
                        delay={0}
                      />
                      +
                    </div>
                  )}
                  <div className="text-white text-center text-1xl">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
}

export default Success;
