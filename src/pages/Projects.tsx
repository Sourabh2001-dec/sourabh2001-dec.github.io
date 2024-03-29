import React from "react";
import LottieWrapper from "../components/LottieWrapper";
import PageHeading from "../components/PageHeading";
import PartitionHeading from "../components/PartitionHeading";
import ProjectGrid from "../components/ProjectGrid";
import ProjectAnimation from "../lotties/project.json";

const Projects = () => {
  return (
    <div className="mb-6">
      <PageHeading heading="Projects" />
      <div className="mx-auto">
        <div
        data-aos="fade-up"
          className="flex flex-wrap sm:flex-nowrap 
        bg-l2 rounded-md 
        text-secondary 
        mx-8 sm:mx-20 lg:mx-36 my-10 overflow-hidden"
        
        >
          <div className="sm:w-full md:w-full xl:w-1/4 overflow-hidden flex-grow">
            <LottieWrapper animationData={ProjectAnimation} />
          </div>
          <div className="px-5 sm:px-10 py-5 flex items-center flex-shrink">
            <p className="body-1">
              My projects makes use of vast variety of latest technology tools.
              My best experience is to create scalable backend projects and beautiful and efficient mobile and web apps.
            </p>
          </div>
        </div>
        <PartitionHeading text="Project Gallery" />
        <ProjectGrid />
      </div>
    </div>
  );
};

export default Projects;
