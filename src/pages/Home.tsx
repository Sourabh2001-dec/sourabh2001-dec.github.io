import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import WaveImage from "../images/wave.png";
import animationData from "../lotties/coder.json";

const socialLinks = [
  {
    icon: "akar-icons:instagram-fill",
    link: "https://www.instagram.com/sourabh_7028/",
  },
  {
    icon: "fa-brands:linkedin-in",
    link: "https://www.linkedin.com/in/sourabh-kumbhar-aa84031a3",
  },
  {
    icon: "codicon:github-inverted",
    link: "https://github.com/Sourabh2001-dec",
  },
];

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };

  return (
    <>
      <div className="container mx-auto px-10 md:px-16 flex-grow flex flex-wrap-reverse items-end md:items-center">
        <div
          className="w-full md:w-1/2 py-5 md:py-10 text-center md:text-left"
          data-aos="fade-up"
        >
          <h1 className="text-2xl md:text-4xl text-white">Hello! I am</h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
            Sourabh Kumbhar
          </h1>
          <p className="text-xl md:text-2xl my-2  text-secondary">
            Full Stack Web Developer and App Developer
          </p>
          <div className="flex space-x-4 my-8 justify-center md:justify-start">
            {socialLinks.map((link) => (
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all hover:-translate-y-1 border-2 border-l2 hover:border-primary-700 cursor-pointer text-primary bg-l2 text-3xl md:text-5xl rounded-full p-3 md:p-5"
              >
                <span
                  className="iconify"
                  data-icon={link.icon}
                  data-inline="false"
                ></span>
              </a>
            ))}
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              to="/about"
              className="text-secondary flex-row flex-nowrap items-center uppercase rounded-sm bg-l2 px-4 py-2 focus:ring-1 focus:ring-primary-800 hover:text-primary cursor-pointer body-1"
            >
              Know More  <span className="iconify inline-block" data-icon="akar-icons:arrow-right" data-inline="false"></span>
            </Link>
            <Link
              to="/about"
              className="text-secondary flex-row flex-nowrap items-center uppercase rounded-sm bg-l2 px-4 py-2 focus:ring-1 focus:ring-primary-800 hover:text-primary cursor-pointer body-1"
            >
              <span className="iconify inline-block" data-icon="akar-icons:download" data-inline="false"></span> <span>Resume</span>
            </Link>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 h-auto -mt-14 md:-mt-44"
          data-aos="fade-up"
        >
          <Lottie options={defaultOptions} style={{ width: "100%" }} />
        </div>
      </div>
      <img src={WaveImage} alt="" className="w-screen h-full self-end" />
    </>
  );
};

export default Home;
