import React from "react";
import profile from "../img/profile.jpg";
import { faHand, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Profile = () => {
  return (
    <div className="">
      <div className="lg:flex mt-4 lg:mx-[200px]">
        <div className="lg:flex-1 flex lg:justify-start">
          <img
            src={profile}
            alt="Profile"
            className="w-[350px] h-[400px] rounded-full mt-10"
          />
        </div>
        <div className="lg:flex-2 flex lg:justify-start sm:justify-center">
          <div className="mt-2 max-w-xl rounded overflow-hidden shadow-sm">
            <h1 className="text-lg font-bold text-white text-center shadow-">
              HI THERE{" "}
              <span>
                {" "}
                <FontAwesomeIcon className="text-yellow-300" icon={faHand} /> I
                AM
              </span>
            </h1>
            <h2 className="text-[72px] font-bold text-white text-center mt-2">
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
            <p className="text-xl text-white mt-2 text-justify">
              A Software Engineer with 2 years of experience, with a strong
              passion and committment for developing web and mobile apps. I use
              JavaScript Stack and its technologies like Node.js, Express, React
              to develop fullstack web apps. I also use react native and flutter
              to develop mobile apps.
            </p>
            <div className="flex justify-evenly items-center mt-10 mb-5">
              <button className="hireMeBtn">Hire Me!</button>
              <button className="hireMeBtn">Download my CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
