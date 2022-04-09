import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-[#212121] py-4 px-6 lg:px-40 shadow-xl">
        <div className="flex items-center flex-shrink-0 text-white mr-6 text-4xl font-logo">
          <Link className="pb-2" to="">
            <span className="text-[#0369A1] font-bold">John</span>N
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-[#0369A1] border-[#0369A1] hover:text-white hover:border-white">
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
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-20">
          <div className="text-lg lg:flex-grow text-white">
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0369A1] mr-8">
              <Link to="">Who I am</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0369A1] mr-8">
              <Link to="">Services</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#0369A1]">
              <Link to="contact">Contact Me</Link>
            </li>
          </div>
          <div>
            <li className="inline-block text-lg px-4 py-2 leading-none border-[2px] rounded text-white border-[#0369A1] hover:border-transparent hover:text-blue-200 hover:bg-[#0369A1] mt-4 lg:mt-0">
              <Link to="">Projects</Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
