import React from "react";
import profile from "../img/profile.jpg";
import { faHand, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Profile = () => {
  return (
    <>
      <div className="flex mb-4 lg:mx-[200px] flex-wrap px-6">
        <div className="lg:flex-1 flex lg:justify-start mx-auto">
          <img
            src={profile}
            alt="Profile"
            className="lg:w-[350px] lg:h-[400px] w-[250px] h-[300px] rounded-full lg:mt-10 mt-0"
          />
        </div>
        <div className="lg:flex-2 flex lg:justify-start">
          <div className="mt-2 max-w-xl rounded overflow-hidden shadow-sm">
            <h1 className="text-lg font-bold text-white text-center mt-4">
              HI THERE{" "}
              <span>
                {" "}
                <FontAwesomeIcon className="text-yellow-300" icon={faHand} /> I
                AM
              </span>
            </h1>
            <h2 className="lg:text-[72px] font-bold text-white text-center mt-2 text-[30px]">
              John Niyontwali
            </h2>
            <p className="text-xl font-bold text-[#0369A1] text-center mb-2">
              Software Developer{" "}
              <span>
                {" "}
                <FontAwesomeIcon
                  className="text-yellow-300"
                  icon={faLaptopCode}
                />
              </span>
            </p>
            <p className="text-xl text-white mt-2 lg:text-center text-justify">
              A Software Engineer with 2 years of experience, with a strong
              passion and committment for developing web and mobile apps. I use
              JavaScript Stack and its technologies like Node.js, Express, React
              to develop fullstack web apps. I also use react native and flutter
              to develop mobile apps.
            </p>
            <div className="flex justify-evenly items-center mt-10 mb-5">
              <button
                className="hireMeBtn"
                onClick={(e) => {
                  window.location.href = "mailto:nijohn0006@gmail.com";
                  e.preventDefault();
                }}
              >
                Hire Me!
              </button>
              <button className="hireMeBtn">
                {" "}
                <a href="https://docs.google.com/document/d/1AIIts1OY9iwcQ4aumbH3MUla-jWhVu8mdRyXTBv07q4/edit?usp=sharing">
                  Download my CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
