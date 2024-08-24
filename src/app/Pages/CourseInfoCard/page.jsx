"use client";
import React from "react";

export default function CourseInfoCard() {
  return (
    <div className="mx-auto max-w-6xl py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-orange-50 p-8 rounded-lg shadow-lg">
        {/* Course Info Section */}
        <div className="pr-6">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest mb-2">
            Course Info
          </h2>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Full Stack Digital Marketing. <br />
            Affordable from UAE Market
          </h1>
          <div className="flex items-center mb-4">
            <span className="text-orange-600 text-xl font-semibold">★★★★★</span>
            <span className="ml-2 text-gray-600 text-sm">
              4.9 out of 5 based on 10K Reviews.
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 line-through">
            6000 AED
          </p>
          <p className="text-3xl font-bold text-orange-600 mb-4">
            3000 AED in 90 Days.
          </p>
          <h3 className="font-bold text-gray-900 mb-4">55+ Modules Covered</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✔️ Search Engine Optimisation (SEO)</li>
            <li>✔️ Pay-per-click PPC</li>
            <li>✔️ Social Media Marketing</li>
            <li>✔️ Influence Marketing</li>
            <li>✔️ Growth and Performance Marketing</li>
            <li>✔️ Content Marketing</li>
            <li>✔️ Top Artificial Intelligence Tools like ChatGPT</li>
            <li>✔️ Email Marketing</li>
            <li>✔️ How to create Website using WordPress</li>
            <li>✔️ and Many More Digital Marketing Tools Taught</li>
          </ul>
        </div>

        {/* Enrollment Form Section */}
        <div className="bg-orange-500 p-6 rounded-lg">
          <h2 className="text-white font-bold uppercase tracking-widest mb-4">
            Enrollment Form
          </h2>
          <h3 className="text-2xl font-bold text-white mb-4">
            FEES 50% OFF FOR NEXT BATCH
          </h3>
          <ul className="text-white space-y-2 mb-4">
            <li>📅 Next Batch: Starting from September</li>
            <li>⏰ Timing: Every Saturday (09:00 PM GMT+4)</li>
            <li>🕒 Lecture Duration: 3 Hours</li>
            <li>👥 Training Type: Detailed Online Classes via ZOOM</li>
          </ul>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <input
              type="email"
              placeholder="Your mail*"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button
              type="submit"
              className="w-full bg-white text-orange-600 font-bold p-3 rounded-lg hover:bg-gray-100"
            >
              ENROLL FAST!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
