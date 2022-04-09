import React from "react";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="lg:mb-24 mb-8">
      <div className="max-w-screen-md bg-[#262626] shadow-3xl rounded-lg mx-auto text-center py-8 lg:mt-[130px] mt-14">
        <div className="text-center">
          <p className="text-white text-lg pt-4">
            <span className="text-lg">
              <FontAwesomeIcon className="text-white" icon={faLocationDot} />
            </span>{" "}
            Kigali - Rwanda
          </p>
          <p className="text-white text-lg pt-4">
            <span className="text-lg">
              <FontAwesomeIcon className="text-white" icon={faPhone} />
            </span>{" "}
            +250 781 161 254{" "}
          </p>
          <p className="text-white text-lg pt-4">
            <span className="text-lg">
              <FontAwesomeIcon className="text-white" icon={faEnvelope} />
            </span>{" "}
            nijohn0006@gmail.com
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex">
            <a
              href="/register"
              className="text-lg px-4 py-2 leading-none border-[2px] rounded text-[#0369A1] border-[#0369A1] hover:border-transparent hover:text-white hover:bg-[#0369A1] mt-4"
              onClick={(e) => {
                window.location.href = "mailto:nijohn0006@gmail.com";
                e.preventDefault();
              }}
            >
              Send me an email...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
