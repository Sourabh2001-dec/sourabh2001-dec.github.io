import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="z-50 bg-l2 md:bg-l1  py-5 md:py-4 px-6 md:px-10 flex justify-between items-center flex-row flex-wrap" data-aos="fade-down">
      <div className="w-full md:w-auto inline-flex">
        <Link to="/" className="text-white inline-block font-bold text-2xl">
          Sourabh<span className="text-primary">.</span>
        </Link>
      </div>
      <ul className="md:flex md:flex-row text-secondary md:space-x-10 hidden">
        <div className="block md:inline-block my-7 md:my-0">
          <Link
            to="/about"
            className="borderLeftRight nav-link"
          >
            About
          </Link>
        </div>
        <div className="block md:inline-block my-7 md:my-0">
          <Link
            to="/projects"
            className="borderLeftRight nav-link"
          >
            Projects
          </Link>
        </div>
        <div className="block md:inline-block my-7 md:my-0">
          <Link
            to="/education"
            className="borderLeftRight nav-link"
          >
            Education
          </Link>
        </div>
        <div className="block md:inline-block my-7 md:my-0">
          <Link
            to="/contact"
            className="borderLeftRight nav-link"
          >
            Contact
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
