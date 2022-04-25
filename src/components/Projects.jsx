import React, { useState, useEffect } from "react";
import ImageSlide from "./ImageSlide";
import Skeleton from "./Skeleton";
import { SliderData } from "./SlideData";

const Projects = () => {
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setIsPending(false);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        {isPending && <Skeleton />}
      </div>
      <ImageSlide slides={SliderData} />
    </>
  );
};

export default Projects;
