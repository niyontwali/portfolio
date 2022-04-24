import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* logo and social media icons */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            {/* copyright to show up on small devices */}
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022 All rights Reserved
            </div>
            {/* logo */}
            <div>
              <NavLink
                className="cursor-pointer -mt-2 hover:text-secondary md:text-5xl text-4xl font-logo"
                to="/"
              >
                <span className="text-[#0369A1] font-bold">John</span>
                <span className="text-white">N</span>
              </NavLink>
            </div>

            {/* social media icons */}
            <div className="flex justify-center space-x-4 text-lg">
              <a
                href="https://web.facebook.com/niyontwali.john?_rdc=1&_rdr"
                target="_blank"
                className="text-white"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com/JohnNiyontwali"
                target="_blank"
                className="text-white"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/n.john01/"
                target="_blank"
                className="text-white"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/john-niyontwali-816549111/"
                target="_blank"
                className="text-white"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/niyontwali/"
                target="_blank"
                className="text-white"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          {/* list container */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <p className="font-bold">Usefull Links</p>
              <NavLink to="/" className="hover:text-gray-300">
                Who I am
              </NavLink>
              <NavLink to="/services" className="hover:text-gray-300">
                Services
              </NavLink>
              <NavLink to="/contactme" className="hover:text-gray-300">
                Contact Me
              </NavLink>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <p className="font-bold">Projects</p>
              <a
                href="https://njohn.netlify.app/"
                className="hover:text-gray-300"
                target="_blank"
                rel="noreferrer"
              >
                My Portfolio
              </a>
              <a
                href="https://github.com/niyontwali/epicLib"
                className="hover:text-gray-300"
                target="_blank"
                rel="noreferrer"
              >
                epicLib
              </a>
              <a
                href="https://github.com/atlp-rwanda/Phantom-Frontend-Elites"
                className="hover:text-gray-300"
                target="_blank"
                rel="noreferrer"
              >
                Phantom App
              </a>
            </div>
          </div>
          {/* input container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Subscribe for notification"
                />
                <button className="px-6 py-2 text-primary rounded-full bg-white hover:bg-gray-300 focus:outline-none">
                  Send
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022 All rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
