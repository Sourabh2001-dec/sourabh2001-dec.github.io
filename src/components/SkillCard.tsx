import React from "react";
import Lottie from "react-lottie";

type SkillCardProps = {
  heading: string;
  points: string[];
  icons: string[];
  animationData: any;
  animationClasses?: string;
  reverse?: boolean;
};

const SkillCard = ({
  heading,
  points,
  icons,
  animationData,
  animationClasses,
  reverse = false,
}: SkillCardProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };

  return (
    <div className="bg-l2 text-white px-5 md:px-14 py-4 md:py-10 my-5 rounded-md" data-aos="fade-up">
      <div
        className={`flex flex-col  ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } md:flex-nowrap`}
      >
        <div className="w-full lg:w-8/12">
          <h1 className="uppercase tracking-wider text-xl">{heading}</h1>
          <div className="bg-primary w-14 h-0.5 mt-0.5"></div>
          <div className="flex space-x-0.5 text-3xl py-4 flex-wrap">
            {icons.map((icon, _) => (
              <div
                key={_.toString()}
                className="hover:bg-l1  transform hover:scale-125  transition-all duration-150 cursor-pointer p-2 rounded-full"
              >
                <span
                  className="iconify"
                  data-icon={icon}
                  data-inline="false"
                ></span>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            {points.map((point, _) => (
              <div key={_.toString()} className="flex items-start">
                <div
                  className={`h-2 rounded-full bg-primary w-2 mt-2 mr-2`}
                ></div>
                <p className="text-white body-1 w-full">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-4/12 flex items-center justify-center">
          <div
            className={
              !!animationClasses ? animationClasses : `w-full md:w-3/4`
            }
          >
            <Lottie options={defaultOptions} speed={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
