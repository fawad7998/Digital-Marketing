import React from "react";
import Home from "./home/page";
import DigitalMarketingCard from "./details/page";
import LearningMethodologies from "./learning-methodologies/page";
import Modules from "./modules/page";
import Success from "./success/Success";
import CourseInfoCard from "./courseInfocard/page";
import TransformativeOutcomes from "./transformative-outcomes/page";
import Certification from "./certification/page";
import FAQComponent from "./faq-component/page";
import NextCourse from "./nextcourse/page";

const page = () => {
  return (
    <>
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
    </>
  );
};

export default page;
