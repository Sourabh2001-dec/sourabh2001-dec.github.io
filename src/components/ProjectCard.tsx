import React from "react";

type ProjectCardProps = {
  projectImage: string;
  projectName: string;
  icons: string[];
  projectDescription: string;
  projectLink: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectDescription,
  projectImage,
  icons,
  projectName,
  projectLink,
  ...props
}) => {
  return (
    <div
      className={`w-auto mb-5 md:mb-0 bg-l2 rounded-md overflow-hidden cursor-pointer flex flex-col   `}
      {...props}
    >
      <div className="w-full h-auto overflow-hidden">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full object-cover overflow-hidden"
        />
      </div>
      <div className="w-full py-3">
        <h2 className="text-secondary bg-l3 uppercase p-3 inline-block font-bold">
          {projectName}
        </h2>
      </div>
      <div className="flex space-x-0.5 text-2xl pl-2 flex-wrap">
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
      <div className="w-full pb-4 px-4 flex flex-col justify-between flex-grow">
        <p className="block">{projectDescription}</p>
        <div className="flex justify-end ">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary mt-3 py-1 px-2 body-1  rounded-md border-2 border-l2 hover:border-primary-800"
          >
            VISIT
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
