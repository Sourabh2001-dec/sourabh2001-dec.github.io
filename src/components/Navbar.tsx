import React, { MutableRefObject, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const ListRef = useRef() as MutableRefObject<HTMLUListElement>;

  const handleNavbarToggle = () => {
    if (ListRef.current) {
      ListRef.current.classList.toggle("navbar--close");
      ListRef.current.classList.toggle("navbar--open");
    }
  };

  return (
    <div
      className="z-50 bg-l2 md:bg-l1  py-5 md:py-4 px-6 md:px-10 flex justify-between items-center flex-row flex-wrap"
      data-aos="fade-down"
    >
      <div className="w-full md:w-auto inline-flex justify-between items-center">
        <Link to="/" className="text-white inline-block font-bold text-2xl">
          Sourabh<span className="text-primary">.</span>
        </Link>
        <button
          className="text-white md:hidden text-2xl focus:outline-none hover:bg-l3 p-2 rounded-lg"
          onClick={handleNavbarToggle}
        >
          <span
            className="iconify"
            data-icon="gg:menu-right"
            data-inline="false"
          ></span>
        </button>
      </div>
      {/* <div className="max-h-0 overflow-hidden sm:overflow-visible"> */}
      <ul
        ref={ListRef}
        className={`md:flex md:flex-row text-secondary md:space-x-10 navbar navbar--close
         overflow-hidden md:overflow-visible`}
      >
        <div className="block md:inline-block my-7 md:my-0">
          <Link onClick={handleNavbarToggle} to="/about" className="borderLeftRight nav-link">
            About
          </Link>
        </div>
        <div className="block md:inline-block my-7 md:my-0">
          <Link onClick={handleNavbarToggle} to="/projects" className="borderLeftRight nav-link">
            Projects
          </Link>
        </div>
        <div className="block md:inline-block my-7 md:my-0">
          <Link onClick={handleNavbarToggle} to="/education" className="borderLeftRight nav-link">
            Education
          </Link>
        </div>
        <div className="block md:inline-block my-7 md:my-0">
          <Link onClick={handleNavbarToggle} to="/contact" className="borderLeftRight nav-link">
            Contact
          </Link>
        </div>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
