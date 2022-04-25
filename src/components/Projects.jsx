import React from "react";
import ImageSlide from "./ImageSlide";
import { SliderData } from "./SlideData";

const Projects = () => {
  return (
    // <div className="h-screen flex items-center justify-between flex-wrap bg-[#262626] py-8 px-6 lg:px-40"></div>
    <>
      <ImageSlide slides={SliderData} />
    </>
  );
};

export default Projects;
