import React, { useState } from "react";
import PropTypes from "prop-types";
import { SliderData } from "./SlideData";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageSlide = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="relative flex justify-center items-center mx-10 lg:mx-0 my-8 lg:my-16">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="text-white absolute bottom-0 lg:top-1/2 left-[0px] lg:left-[200px] text-xl cursor-pointer z-10 select-none"
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        className="text-white absolute bottom-0 lg:top-1/2 right-[0px] lg:right-[200px] text-xl cursor-pointer z-10 select-none"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <img
                  src={slide.image}
                  alt="image carousel"
                  className="h-[50%] lg:h-[400px] rounded-md"
                />
                <div className="text-white text-sm m-auto text-center w-[220px] py-2 mt-6 opacity-90  border-[4px] rounded-full border-[#0369A1] hover:text-[#0369A1] hover:border-transparent hover:bg-white">
                  <a href={slide.url}> Navigate to the Project </a>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

ImageSlide.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default ImageSlide;
