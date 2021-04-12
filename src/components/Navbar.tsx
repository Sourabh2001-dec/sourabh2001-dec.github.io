import React, { MutableRefObject, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Education",
    path: "/education",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const ListRef = useRef() as MutableRefObject<HTMLUListElement>;

  const location = useLocation();

  const handleNavbarToggle = () => {
    if (ListRef.current) {
      ListRef.current.classList.toggle("navbar--close");
      ListRef.current.classList.toggle("navbar--open");
    }
  };

  return (
    <div
      className="z-50 bg-l2 md:bg-l1  py-5 md:py-4 px-6 md:px-10 flex justify-between items-center flex-row flex-wrap"
      data-aos="fade-down" data-aos-delay="-500"
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
        {navLinks.map((link,_) => (
          <div className="block md:inline-block my-7 md:my-0" key={_.toString()}>
            <Link
              onClick={handleNavbarToggle}
              to={link.path}
              className={`borderLeftRight nav-link ${location.pathname === link.path && "text-primary"}`}
            >
              {link.title}
            </Link>
          </div>
        ))}
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
