import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { BsBarChart } from "react-icons/bs";

const Certification = () => {
    return (
        <div className="bg-orange-color">
            <div className="max-w-6xl mx-auto px-5 py-10">
                <div className="text-center space-y-4 mb-12">
                    <h3 className="text-white text-md tracking-wide font-extrabold flex items-center justify-center before:content-[''] before:h-3px before:w-10 before:bg-white before:mr-2 after:content-[''] after:h-3px after:w-10 after:bg-white after:ml-2">
                        Get Certification
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-white">
                        Stand Out with a Certification That Matters
                    </h2>
                    <p className="text-sm text-white">
                        Get a Certification that you can flaunt on every social media
                        platform as an achievement & can use as your ticket to grab your
                        dream job.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center text-white p-10 border border-white rounded-lg ">
                    <div className="lg:w-1/2 space-y-6 ">
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 ">
                                <FaMoneyBillWave className="text-7xl" />
                                <div>
                                    <h4 className="font-bold">Increased Earning Potential</h4>
                                    <p className="text-sm">
                                        Use this to lead to a higher salary or a better job
                                        position, which can result in an increase in earning
                                        potential.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 ">
                                <FaRegShareFromSquare className="text-6xl" />
                                <div>
                                    <h4 className="font-bold">Easy Sharable</h4>
                                    <p className="text-sm">
                                        Add the certificate to your CV or use it to post on your
                                        various social media platforms.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 ">
                                <FaRegLightbulb className="text-6xl" />
                                <div>
                                    <h4 className="font-bold">Skill Validation</h4>
                                    <p className="text-sm">
                                        Validate your knowledge & skills, especially important for
                                        you working in industries/particular areas.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 ">
                                <BsBarChart className="text-6xl" />
                                <div>
                                    <h4 className="font-bold">Improved Credibility</h4>
                                    <p className="text-sm">
                                        Use this to come as more knowledgeable & credible in your
                                        field working with your peers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
                        <img
                            src="/Certificate.png"
                            alt="Certificate Image"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certification;
