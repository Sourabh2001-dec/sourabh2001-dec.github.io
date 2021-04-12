import React from "react";

type CourseCardProps = {
  courseName: string;
  provider?: string;
  duration: string;
  link?: string;
  providerImage: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  courseName,
  provider,
  duration,
  link,
  providerImage,
}) => {
  return (
    <div className="bg-l2 flex flex-wrap sm:flex-nowrap rounded-md overflow-hidden text-white my-3 sm:mx-3 w-auto max-w-0.5 shadow-xl" data-aos="fade-up">
      <img
        src={providerImage}
        alt=""
        className="w-1/4 ml-4 mt-4 rounded-md sm:ml-0 sm:mt-0 md:rounded-none md:w-1/4 object-cover"
      />
      <div className="p-4 flex flex-col justify-between w-full lg:w-3/4">
        <div>
          <h1 className="text-base md:text-md uppercase">{courseName}</h1>
          <h2 className="text-xs md:text-sm text-secondary">{provider}</h2>
        </div>
        <div className="w-full my-3 md:my-0 md:mt-3 flex justify-between">
          <h2 className="text-xs md:text-base">{duration}</h2>
          <a
            href={!!link ? link : "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-xs md:text-base cursor-pointer"
          >
            Verify
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
