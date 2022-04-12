import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faMobile } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap py-0 px-6 lg:px-40">
        <div className="max-w-sm py-4 hover:py-6 px-8 hover:bg-slate-800 hover:text-white bg-[#2b2b2b] shadow-lg rounded-lg my-12">
          <div className="">
            <FontAwesomeIcon
              className="w-16 h-16 rounded-md text-yellow-400 hover:text-white"
              icon={faJs}
            />
            <h2 className="text-[#c3c3c3] text-2xl font-semibold">
              Web Designing using JavaScript
            </h2>
            <p className="mt-2 text-[#c3c3c3] text-semibold text-lg">
              JavaScrip is so popular that it is considered to be used as a
              client-side programming language by by 97% of all websites.
              JavaScript makes responsive design easier and it has become
              integral to the internet experience. Therefore as a develop I use
              it to build increased interactions and complexity into
              application. I also use this stack in mobile apps!
            </p>
          </div>
        </div>

        <div className="max-w-sm py-4 hover:py-6 px-8 hover:bg-slate-800 hover:text-white bg-[#2b2b2b] shadow-lg rounded-lg my-12">
          <div>
            <FontAwesomeIcon
              className="w-16 h-16 rounded-md text-yellow-400 hover:text-white"
              icon={faNodeJs}
            />
            <h2 className="text-[#c3c3c3] text-2xl font-semibold">
              Building APIs for the Backend using NodeJS
            </h2>
            <p className="mt-2 text-[#c3c3c3] text-semibold text-lg">
              Node.js is primarily used for non-blocking, event-driven servers,
              due to its single threaded nature. Therefore, it is speedy and
              scalable server-side runtime environment. I use it to help me
              create full stack app which with both frontend and backend build
              with JavaScrip! This technology is used by a lot of renowned apps
              like Netflix, Google, Paypal, LinkedIn, Uber and eBay
            </p>
          </div>
        </div>
        <div className="max-w-sm py-4 hover:py-6 px-8 hover:bg-slate-800 hover:text-white bg-[#2b2b2b] shadow-lg rounded-lg my-12">
          <div>
            <FontAwesomeIcon
              className="w-16 h-16 rounded-md text-yellow-400 hover:text-white z-20"
              icon={faReact}
            />
            <h2 className="text-[#c3c3c3] text-2xl font-semibold">
              Building better UI (e.g SPA) using React
            </h2>
            <p className="mt-2 text-[#c3c3c3] text-semibold text-lg">
              React.js is an open-source JavaScript library that is used for
              building User Interfaces(UI) specifically for Single-Page
              Applications(SPA). I use this library to develop most of my web
              applications since it allows me to create reusable UI components.
              Since this Library is maintained by skilled people it is believe
              to power alot of apps both web and mobile.
            </p>
          </div>
        </div>
        <div className="max-w-sm py-4 hover:py-6 px-8 hover:bg-slate-800 hover:text-white bg-[#2b2b2b] shadow-lg rounded-lg my-12">
          <div>
            <FontAwesomeIcon
              className="w-16 h-16 rounded-md text-yellow-400 hover:text-white"
              icon={faPython}
            />
            <h2 className="text-[#c3c3c3] text-2xl font-semibold">
              Developing Web applications using Python, Django Framework
            </h2>
            <p className="mt-2 text-[#c3c3c3] text-semibold text-lg">
              Python is commonly used for developing websites and software, task
              automation, data analysis and data visualization. I use Django,
              which is a python framework to rapidly develop secure and
              maintainable website with better User Dashboards/Portals. This
              framework is loved and used by many great Companies!
            </p>
          </div>
        </div>

        <div className="max-w-sm py-4 hover:py-6 px-8 hover:bg-slate-800 hover:text-white bg-[#2b2b2b] shadow-lg rounded-lg my-12">
          <div>
            <FontAwesomeIcon
              className="w-16 h-16 rounded-md text-yellow-400 hover:text-white"
              icon={faMobile}
            />
            <h2 className="text-[#c3c3c3] text-2xl font-semibold">
              Android & iOS Mobile App development using React Native & Flutter
            </h2>
            <p className="mt-2 text-[#c3c3c3] text-semibold text-lg">
              I develop mobile applications for both Android and iOS using
              different modern stacks like React Native and Flutter. React
              Native is an open-source JS framework for designing apps. Flutter
              is a UI toolkit for Google that is used to crafting beautiful,
              natively mobile & web apps. The two frames are the tools I used
              while developing the apps!
            </p>
          </div>
        </div>
        <div className="max-w-sm py-4 hover:py-6 px-8 hover:bg-slate-800 hover:text-white bg-[#2b2b2b] shadow-lg rounded-lg my-12">
          <div>
            <FontAwesomeIcon
              className="w-16 h-16 rounded-md text-yellow-400 hover:text-white z-20"
              icon={faDatabase}
            />
            <h2 className="text-[#c3c3c3] text-2xl font-semibold">
              Constructing both NoSQL and SQL Database for both mobile and web
              apps
            </h2>
            <p className="mt-2 text-[#c3c3c3] text-semibold text-lg">
              While developing web and mobile applications of course you will
              need a database to store and fetch your data. I use MongoDB which
              is an NoSQL database and it is more flexible and ensures high and
              diverse data availability. I also use PostgreSQL which is used as
              a primary data store for many web, mobile and analytics apps.!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
