import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-[#212121] py-4 px-6 lg:px-40 shadow-xl">
        <div className="flex items-center flex-shrink-0 text-white mr-6 text-4xl font-logo">
          <NavLink className="pb-2" to="/">
            <span className="text-[#0369A1] font-bold">John</span>
            <span className="text-white">N</span>
          </NavLink>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-[#0369A1] hover:border-[#0369A1]"
            onClick={handleClick}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto lg:ml-20">
          <div className="text-lg lg:flex-grow text-white">
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-8">
              <NavLink exact="true" to="/" navbaractive="active">
                Who I am
              </NavLink>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-8">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:underline">
              <NavLink to="/contactme">Contact Me</NavLink>
            </li>
          </div>
          <div>
            <li className="inline-block text-lg px-4 py-2 leading-none border-[4px] rounded-full text-white border-[#0369A1] hover:border-transparent hover:text-[#0369A1] hover:bg-white mt-4 lg:mt-0">
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </div>
        </div>
      </nav>

      {/* Mobile view */}

      {navOpen && (
        <div className="bg-primary shadow-xl mx-6 py-4">
          <div className="text-lg text-white text-center">
            <li className="block text-white hover:underline">
              <NavLink exact="true" to="/" navbaractive="active">
                Who I am
              </NavLink>
            </li>
            <li className="block mt-4 text-white hover:underline">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="block mt-4 text-white hover:underline">
              <NavLink to="/contactme">Contact Me</NavLink>
            </li>
          </div>
          <div className="text-center">
            <li className="inline-block text-lg px-4 py-2 leading-none border-[2px] rounded text-white border-[#0369A1] hover:border-transparent hover:text-[#0369A1] hover:bg-white mt-4 ">
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
