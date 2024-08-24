import React from "react";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import Home from "./Pages/Home/page";
import DigitalMarketingCard from "./Pages/Details/page";
import Success from "./Pages/Success/Success";
import CourseInfoCard from "./Pages/CourseInfoCard/page";
import Certification from "./Pages/Certification/page";
import FAQComponent from "./Pages/FAQComponent/page";
import NextCourse from "./Pages/NextCourse/page";
import LearningMethodologies from "./Pages/LearningMethodologies/page";
import Modules from "./Pages/Modules/page";
import TransformativeOutcomes from "./Pages/TransformativeOutcomes/page";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <Home />
      <div className="my-20">
        <DigitalMarketingCard />
      </div>
      <LearningMethodologies />
      <Modules />
      <Success />
      <CourseInfoCard />
      <TransformativeOutcomes />
      <Certification />
      <FAQComponent />
      <NextCourse />
      <Footer />
    </>
  );
};

export default page;
